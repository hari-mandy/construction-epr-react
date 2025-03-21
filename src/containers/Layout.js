import React, { useState, useEffect } from "react";
import { MenuTogglecontext, NotificationToggleContext } from "../context/menuToggleContext";
import Header from "../components/Header";
import SideBar from "../components/sideNavBar/SideBar";
import NotificationBar from "../components/header/NotificationBar";

const Layout = ({ children }) => {
    const [toggleValue, setToggleValue] = useState(false);
    const [notificationToggle, setNotificationToggle] = useState(false);

    useEffect(() => {
        console.log("Toggle Value Changed:", toggleValue);
    }, [toggleValue]);  // This will run every time toggleValue changes

    return (
        <MenuTogglecontext.Provider value={{ toggleValue, setToggleValue }}>
            <NotificationToggleContext.Provider value={{ notificationToggle, setNotificationToggle }}>
                <Header />
                <SideBar />
                <NotificationBar />
                <div className={`main-content ${toggleValue ? "expand-main-content" : ""}`}>
                    {children}
                </div>
            </NotificationToggleContext.Provider>
        </MenuTogglecontext.Provider>
    );
};

export default Layout;
