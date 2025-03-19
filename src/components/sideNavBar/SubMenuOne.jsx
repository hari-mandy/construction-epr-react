import { useEffect, useState, useRef } from "react";
import React from "react";
import SubMenuTwo from "./SubMenuTwo";

const SubMenuOne = ({ title, subMenus }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const ulRef = useRef(null); // Ref for <ul>

    useEffect(() => {
        setTimeout(() => {
            if (ulRef.current) {
                const activeItem = ulRef.current.querySelector(".show-menu");
                setIsExpanded(!!activeItem);
            }
        }, 100);
    }, []);


    return (
        <li className="depth-1" key={title}>
            <h6 onClick={() => setIsExpanded(!isExpanded)}>{title}</h6>
            <ul ref={ulRef} className={`side-menu-list-depth-2 ${isExpanded ? "active-depth-2" : ""}`}>
                {subMenus.map((menuItem, index) => (
                    <SubMenuTwo items={menuItem} key={index} />
                ))}
            </ul>
        </li>
    );
};

export default SubMenuOne;
