import Iconebox from '../images/Iconebox.svg';
import matters from '../images/matters.svg';
import menu4 from '../images/menu-4.svg';
import menu5 from '../images/menu-5.svg';
import menu6 from '../images/menu-6.svg';
import menu7 from '../images/menu-7.svg';
import menu8 from '../images/menu-8.svg';
import menu9 from '../images/menu-9.svg';
import menu10 from '../images/menu-10.svg';

const sideMenus = {
    "pages": [
        {
            "name" : "Dashboard",
            "path" : "/dashboard",
            "iconLink" : Iconebox,
            "subMenu" : [],
        },
        {
            "name" : "Matters",
            "path" : "/matters",
            "iconLink" : matters,
            "subMenu" : [],
        },
        {
            "name" : "Menu 3",
            "path" : "/menu-3",
            "iconLink" : Iconebox,
            "subMenu" : [],
        },
        {
            "name" : "Menu 4",
            "path" : "/dashboard",
            "iconLink" : menu4,
            "subMenu" : [],
        },
        {
            "name" : "Menu 5",
            "path" : "/menu-5",
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
            "path" : "/menu-6",
            "iconLink" : menu6,
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
    "settings" : [
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
    ]
}

export default sideMenus