import React from 'react';
import sitelogo from '../images/site-logo.png';
import notification from '../images/Notifications.png';
import userprofile from '../images/user-profile.png';
import MenuCloseIcon from './MenuCloseIcon';
import MenuOpenIcon from './MenuOpenIcon';
import DesktopSearchIcon from './DesktopSearchIcon';
import MobileSearchIcon from './MobileSearchIcon';

const Header = () => {
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
                    <input type="search" className="input-search" placeholder="Search"></input>
                </div>
                <div className="mobile-search">
                    <button className="open-search">
                        <MobileSearchIcon />
                        <MenuCloseIcon />
                    </button>
                    <div className="full-width-search-bar">
                        <button className="search-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M9.99902 17.0007C13.865 17.0007 16.999 13.8667 16.999 10.0007C16.999 6.13468 13.865 3.00067 9.99902 3.00067C6.13303 3.00067 2.99902 6.13468 2.99902 10.0007C2.99902 13.8667 6.13303 17.0007 9.99902 17.0007Z" stroke="http://localhost:3000/64748B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M14.999 15.0007L20.999 21.0007" stroke="http://localhost:3000/64748B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                        <input type="search" className="input-search" placeholder="Search"></input>
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
