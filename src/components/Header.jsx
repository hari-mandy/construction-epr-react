import React, { useState, useEffect, useContext, use } from 'react'
import notification from '../images/Notifications.png'
import MenuCloseIcon from './icons/MenuCloseIcon'
import MenuOpenIcon from './icons/MenuOpenIcon'
import DesktopSearchIcon from './icons/DesktopSearchIcon'
import MobileSearchIcon from './icons/MobileSearchIcon'
import lightIcon from '../images/light-mode.png'
import { MenuTogglecontext, NotificationToggleContext } from '../context/menuToggleContext'
import UserMenu from './header/UserMenu'
import InputText from './inputs/InputText'
import { themeToggleContext } from '../context/themeToggleContext'

const Header = () => {
    const { toggleValue, setToggleValue } = useContext(MenuTogglecontext);
    const { notificationToggle, setNotificationToggle } = useContext(NotificationToggleContext);
    const { theme, setTheme } = useContext(themeToggleContext);
    const [searchOpen, setSearchOpen] = useState(false);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
      }, [theme]);

    //function to toggle the search bar in responsive.
    const openSearchBar = () => {
        if(!searchOpen){
            setSearchOpen(true);
            return;
        }
        setSearchOpen(false);
    }

    const notificaionToggle = () => {
        if(!notificationToggle) {
            setNotificationToggle(true);
            return ;
        }
        setNotificationToggle(false);
    }

    const handleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));

    const handelSideBarToggle = () => {
        if(!toggleValue) {
            setToggleValue(true);
            return ;
        }
        setToggleValue(false);
        return ;
    };
    
  return (
    <header>
        <button className="hamburg-sidemenu" onClick={handelSideBarToggle}>
            <MenuOpenIcon />
        </button>
        <div className="header-content">
            <div className="header-search">
                <div className="desktop-search">
                    <button className="search-icon">
                        <DesktopSearchIcon />
                    </button>
                    <InputText inputType="search" inputStyle="input-search" placeholder="Search..." />
                </div>
                <div className={`mobile-search ${searchOpen ? 'open' : ''}`}>
                    <button className="open-search" onClick={openSearchBar}>
                        <MobileSearchIcon />
                        <MenuCloseIcon />
                    </button>
                    <div className="full-width-search-bar">
                        <button className="search-icon">
                            <MobileSearchIcon />
                        </button>
                        <InputText inputType="search" inputStyle="input-search" placeholder="Search..." errorMessageAbove="false"/>
                    </div>
                </div>
            </div>
            <button className='toggle-button' onClick={handleTheme}>
                <img src={lightIcon} alt="" className={theme === 'dark' ? 'dark-icon' : ''} />
            </button>
            <div className="notification-icon" onClick={notificaionToggle}>
                <img src={notification} alt=""></img>
            </div>
            <UserMenu />
        </div>
    </header>
  )
}

export default Header;
