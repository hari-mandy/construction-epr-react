import React, { useState, useContext, useEffect } from 'react'
import MenuOpenIcon from '../icons/MenuOpenIcon'
import sitelogo from '../../images/dummies-icon.png'
import sideMenus from '../../data/sidebar-data'
import MenuCloseIcon from '../icons/MenuCloseIcon'
import SubMenuOne from '../sideNavBar/SubMenuOne'
import { MenuTogglecontext } from '../../context/menuToggleContext'

const SideBar = () => {
    const sideMenuArray = Object.entries(sideMenus);
    const [isExpanded, setIsExpanded] = useState(true);
    const [isMounted, setIsMounted] = useState(false);

    const { toggleValue, setToggleValue } = useContext(MenuTogglecontext);

    useEffect(() => {
        setIsMounted(true);
      }, []);

    useEffect(() => {
        if(!isExpanded) {
            setIsExpanded(true);
            return ;
        }
        setIsExpanded(false);
        return;
    },[toggleValue])

    const handleToggle = () => {
        if(!isExpanded) {
            setToggleValue(true);
            return ;
        }
        setToggleValue(false);
    }

    useEffect(() => {
        if (isExpanded) {
            document.body.classList.add('scroll-lock');
        } else {
            document.body.classList.remove('scroll-lock');
        }
    }, [isExpanded]);

	return (
        <section className={`side-menu-bar ${isMounted && isExpanded ? "collapse-side-menu" : ""}`} >
            <ul className='side-menu-list-depth-1'>
                <li className="site-logo">
                    <a href="/"><img src={sitelogo} alt="site Logo"></img></a>
                    <button className="hamburg-sidemenu" onClick={handleToggle} >
                        <MenuCloseIcon />
                        <MenuOpenIcon />
                    </button>
                </li>
            {sideMenuArray.map(([menuTitle, menuItems]) => (
                <SubMenuOne key={menuTitle} title={menuTitle} subMenus={menuItems} />
             ))}
            </ul>
            <a href="#" className="mobile-side-menubar-adjuster" onClick={handleToggle}></a>
        </section>
    )
}

export default SideBar
