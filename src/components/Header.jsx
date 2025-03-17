import React, { useState, useEffect } from 'react';
import sitelogo from '../images/dummies-icon.png';
import notification from '../images/Notifications.png';
import userprofile from '../images/user-profile.png';
import MenuCloseIcon from './icons/MenuCloseIcon';
import MenuOpenIcon from './icons/MenuOpenIcon';
import DesktopSearchIcon from './icons/DesktopSearchIcon';
import MobileSearchIcon from './icons/MobileSearchIcon';

const Header = () => {
    const [width, setWidth] = useState(window.innerWidth);//state to update the window width.

    //useEffect hook to moniter the window width.
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
    }, []);

    //function to toggle the search bar in responsive.
    const openSearchBar = () => {
        document.querySelector('.mobile-search').classList.toggle('open');
    }

    const menuToggle = () => {
        const menuButton = document.querySelector(".hamburg-sidemenu");
        const sideMenu = document.querySelector(".side-menu-bar");
        const mainContent = document.querySelector(".main-content");
        const mainTag = document.querySelector("body");

        sideMenu.classList.toggle("collapse-side-menu");
        mainContent.classList.toggle("expand-main-content");

        // Change icon and add scroll-lock only if screen width is less than 1024px
        if (width < 1024) {
            menuButton.classList.toggle("open-menu");
            mainTag.classList.toggle("scroll-lock");
        }
        
        // Handle window resize for responsive behavior
        function handleResize() {
            if (window.innerWidth < 1024) {
                sideMenu.classList.add("collapse-side-menu");
                mainContent.classList.add("expand-main-content");
            } else {
                sideMenu.classList.remove("collapse-side-menu");
                mainContent.classList.remove("expand-main-content");
                menuButton.classList.remove("open-menu"); // Reset icon state
                mainTag.classList.remove("scroll-lock"); // Remove scroll lock on large screens
            }
        }

        // Check on page load and on resize
        window.addEventListener("resize", function () {
            if(window.innerWidth >=1024){
                handleResize();            
            }
        });
    }
    
  return (
    <header>
        <div className="header-content">
            <div className="header-search">
                <div className="desktop-search">
                    <button className="search-icon">
                        <DesktopSearchIcon />
                    </button>
                    <input type="search" className="input-search" placeholder="Search..."></input>
                </div>
                <div className="mobile-search">
                    <button className="open-search" onClick={openSearchBar}>
                        <MobileSearchIcon />
                        <MenuCloseIcon />
                    </button>
                    <div className="full-width-search-bar">
                        <button className="search-icon">
                            <MobileSearchIcon />
                        </button>
                        <input type="search" className="input-search" placeholder="Search..."></input>
                    </div>
                </div>
            </div>
            <div className="notification-icon">
                <img src={notification} alt=""></img>
            </div>
            <div className="user-tab">
                <img src={userprofile}alt="User profile"></img>
                <h4 className="user-name">Manohar</h4>
                <span className="dropdown-icon"></span>
                <ul className="user-info-list">
                    <li className="user-detail">
                        <img src={userprofile} alt="user"></img>
                        <div>
                            <h6>Manohar</h6>
                            <a className="para-small user-email" href="mailto:someone@example.com">manohar@mail.com</a>
                        </div>
                    </li>
                    <li className="user-profile"><a href="http://localhost:3000/">My Profile</a></li>
                    <li className="user-integration"><a href="http://localhost:3000/">Integrations</a></li>
                    <li className="user-history"><a href="http://localhost:3000/">History</a></li>
                    <li className="user-logout"><a href="http://localhost:3000/">Logout</a></li>
                </ul>
            </div>
        </div>
    </header>
  )
}

export default Header;
