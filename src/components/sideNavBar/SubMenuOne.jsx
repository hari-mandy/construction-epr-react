import { useState } from "react"
import React from 'react'
import SubMenuTwo from './SubMenuTwo'

const SubMenuOne = ({key, title, subMenus }) => {
    const [isExpanded, setIsExpanded] = useState(false)


    return (
        <li className="depth-1 active-depth-1" key={key}>
            <h6 onClick={() => setIsExpanded(!isExpanded)}>{title}</h6>
            <ul className={`side-menu-list-depth-2 ${isExpanded ? "active-depth-2" : ""}`}>
                {subMenus.map((menuItem) => (
                    <SubMenuTwo items={menuItem} />
                ))}
            </ul>
        </li>
    )
}

export default SubMenuOne
