import React, { useState } from 'react';
import MenuOpenIcon from '../icons/MenuOpenIcon';
import sitelogo from '../../images/dummies-icon.png';
import sideMenus from '../../data/sidebar-data'
import MenuCloseIcon from '../icons/MenuCloseIcon';
import SubMenuOne from '../sideNavBar/SubMenuOne'

const SideBar = () => {
    const sideMenuArray = Object.entries(sideMenus);
    const [isExpanded, setIsExpanded] = useState(false);

	return (
        <section className={`side-menu-bar ${isExpanded ? "collapse-side-menu" : ""}`}>
            <div className="site-logo">
                <img src={sitelogo} alt="site Logo"></img>
                <button className="hamburg-sidemenu" onClick={() => setIsExpanded(true)} >
                    <MenuCloseIcon />
                    <MenuOpenIcon />
                </button>
            </div>
            <ul className='side-menu-list-depth-1'>
            {sideMenuArray.map(([menuTitle, menuItems]) => (
                <SubMenuOne key={menuTitle} title={menuTitle} subMenus={menuItems} />
             ))}
            </ul>
            <a href="#" className="mobile-side-menubar-adjuster" ></a>
        </section>
    )
}

export default SideBar
