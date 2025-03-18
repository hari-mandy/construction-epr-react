import { useState } from "react"
import React from 'react'
import SubMenuTwo from './SubMenuTwo'

const SubMenuOne = ({title, subMenus }) => {
    const [isExpanded, setIsExpanded] = useState(false)


    return (
        <li className="depth-1 active-depth-1" key={title}>
            <h6 onClick={() => setIsExpanded(!isExpanded)}>{title}</h6>
            <ul className={`side-menu-list-depth-2 ${isExpanded ? "active-depth-2" : ""}`}>
                {subMenus.map((menuItem, index) => (
                    <SubMenuTwo items={menuItem} key={index} />
                ))}
            </ul>
        </li>
    )
}

export default SubMenuOne
