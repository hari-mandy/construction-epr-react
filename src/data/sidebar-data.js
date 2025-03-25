import Iconebox from '../images/Iconebox.svg';
import matters from '../images/matters.svg';
import menu4 from '../images/menu-4.svg';
import menu5 from '../images/menu-5.svg';
import menu6 from '../images/menu-6.svg';
import menu7 from '../images/menu-7.svg';
import settings from '../images/setting.svg'
// import menu8 from '../images/menu-8.svg';
// import menu9 from '../images/menu-9.svg';
// import menu10 from '../images/menu-10.svg';

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
            "name" : "Party Master",
            "path" : "/party-master",
            "iconLink" : Iconebox,
            "subMenu" : [],
        },
        {
            "name" : "Menu 4",
            "path" : "/menu-four",
            "iconLink" : menu4,
            "subMenu" : [],
        },
        {
            "name" : "Menu 5",
            "iconLink" : menu5,
            "subMenu": [
                {
                    name : "SubMenu 1",
                    path : "/submenu-one"
                },
                {
                    name : "SubMenu 2",
                    path : "/submenu-two"
                },
                {
                    name : "SubMenu 3",
                    path : "/submenu-three"
                },
                {
                    name : "SubMenu 4",
                    path : "/submenu-four"
                }
            ]
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
            "subMenu": [
                {
                    name : "SubMenu 1",
                    path : "/submenu-one"
                },
                {
                    name : "SubMenu 2",
                    path : "/submenu-two"
                },
                {
                    name : "SubMenu 3",
                    path : "/submenu-three"
                },
                {
                    name : "SubMenu 4",
                    path : "/submenu-four"
                }
            ]
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
            "name" : "My Profile",
            "path" : "/profile",
            "iconLink" : settings,
            "subMenu" : [],
        }
    ]
}

export default sideMenus