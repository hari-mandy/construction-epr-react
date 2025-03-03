import React from 'react';
import sitelogo from '../images/dummies-icon.png';
import notification from '../images/Notifications.png';
import userprofile from '../images/user-profile.png';
import MenuCloseIcon from './MenuCloseIcon';
import MenuOpenIcon from './MenuOpenIcon';
import DesktopSearchIcon from './DesktopSearchIcon';
import MobileSearchIcon from './MobileSearchIcon';

const Header = () => {
    const openSearchBar = () => {
        document.querySelector('.mobile-search').classList.toggle('open');
    }
    
  return (
    <header>
        <div className="site-logo">
            <img src={sitelogo} alt="site Logo"></img>
            <button className="hamburg-sidemenu">
                <MenuCloseIcon />
                <MenuOpenIcon />
            </button>
        </div>
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
