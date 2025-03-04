import React from 'react';
import Iconebox from '../images/Iconebox.svg';
import matters from '../images/matters.svg';
import menu4 from '../images/menu-4.svg';
import menu5 from '../images/menu-5.svg';
import menu6 from '../images/menu-6.svg';
import menu7 from '../images/menu-7.svg';
import menu8 from '../images/menu-8.svg';
import menu9 from '../images/menu-9.svg';
import menu10 from '../images/menu-10.svg';

const SideBar = () => {
    const sideMenus = {
        "pages": [
            {
                "name" : "Menu 1",
                "iconLink" : Iconebox,
                "subMenu" : [],
            },
            {
                "name" : "Matters",
                "iconLink" : matters,
                "subMenu" : [],
            },
            {
                "name" : "Menu 3",
                "iconLink" : Iconebox,
                "subMenu" : [],
            },
            {
                "name" : "Menu 4",
                "iconLink" : menu4,
                "subMenu" : [],
            },
            {
                "name" : "Menu 5",
                "iconLink" : menu5,
                "subMenu" : [
                    "Submenu 1",
                    "Submenu 2",
                    "Submenu 3",
                    "Submenu 4",
                ],
            },
            {
                "name" : "Menu 6",
                "iconLink" : menu6,
                "subMenu" : [],
            },
            {
                "name" : "Menu 7",
                "iconLink" : menu7,
                "subMenu" : [],
            },
            {
                "name" : "Menu 8",
                "iconLink" : menu8,
                "subMenu" : [],
            },
            {
                "name" : "Menu 9",
                "iconLink" : menu9,
                "subMenu" : [],
            },
            {
                "name" : "Menu 10",
                "iconLink" : menu10,
                "subMenu" : [],
            }
        ],
        "apps": [
            {
                "name" : "Apps",
                "iconLink" : menu4,
                "subMenu" : [
                    "Submenu 1",
                    "Submenu 2",
                    "Submenu 3",
                    "Submenu 4",
                ],
            },
            {
                "name" : "Apps 1",
                "iconLink" : matters,
                "subMenu" : [],
            },
            {
                "name" : "Apps 2",
                "iconLink" : menu7,
                "subMenu" : [],
            }
        ],
        "settings" : []
    }

    const sideMenuArray = Object.entries(sideMenus);

    const removeSidebar = () => {
        document.querySelector('.side-menu-bar').classList.remove('collapse-side-menu');
        document.querySelector('.main-content').classList.remove('expand-main-content');
        document.querySelector('.hamburg-sidemenu').classList.remove('open-menu');
        document.querySelector('body').classList.remove('scroll-lock');
    }
    
	return (
        <section className="side-menu-bar">
            <ul className="side-menu-list-depth-1">
                {sideMenuArray.map(([menuTitle, menuItems]) => (
                    <li key={menuTitle} className="depth-1 active-depth-1">
                        <h6><a href="#">{menuTitle}</a></h6>
                        <ul className="side-menu-list-depth-2">
                            {menuItems.map((menuItem, index) => (
                                // condition to make submenu active
                                <li key={menuItem.name} className={index === 0 ? ("depth-2 active-depth-2") : ("depth-2")}> 
                                    <a href="#">
                                        <img src={menuItem.iconLink} alt="" />
                                        <h4>{menuItem.name}</h4>
                                    </a>
                                    {menuItem.subMenu.length > 0 ?
                                        (<ul className="side-menu-list-depth-3">
                                            {menuItem.subMenu.map((submenuItem) => (
                                                <li className="depth-3" key={submenuItem}><p><a href="#">{submenuItem}</a></p></li>
                                            ))}
                                        </ul>) : ('')
                                    }
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
            <a href="#" className="mobile-side-menubar-adjuster" onClick={removeSidebar}></a>
        </section>
    )
}

export default SideBar
