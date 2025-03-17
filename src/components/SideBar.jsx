import React, { useState } from 'react';
import MenuOpenIcon from './icons/MenuOpenIcon';
import sitelogo from '../images/dummies-icon.png';
import sideMenus from '../data/sidebar-data'
import MenuCloseIcon from './icons/MenuCloseIcon';

const SideBar = () => {
    const sideMenuArray = Object.entries(sideMenus);
    const [isExpanded, setIsExpanded] = useState(false)

    const handleClick = () => {
        if(!isExpanded) {
            setIsExpanded(true);
            return ;
        }
        setIsExpanded(false);
    }

	return (
        <section className="side-menu-bar">
            <div className="site-logo">
                <img src={sitelogo} alt="site Logo"></img>
                <button className="hamburg-sidemenu" >
                    <MenuCloseIcon />
                    <MenuOpenIcon />
                </button>
            </div>
            <ul className="side-menu-list-depth-1">
                {sideMenuArray.map(([menuTitle, menuItems]) => (
                    <li key={menuTitle} className="depth-1 active-depth-1">
                        <h6 onClick={() => setIsExpanded(!isExpanded)}>{menuTitle}</h6>
                        <ul className={`side-menu-list-depth-2 ${isExpanded ? "active-depth-2" : ""}`}>
                            {menuItems.map((menuItem, index) => (
                                // condition to make submenu active
                                <li key={menuItem.name} className="depth-2"> 
                                    <a href="/">
                                        <img src={menuItem.iconLink} alt="" />
                                        <h4>{menuItem.name}</h4>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
            <a href="#" className="mobile-side-menubar-adjuster" ></a>
        </section>
    )
}

export default SideBar
