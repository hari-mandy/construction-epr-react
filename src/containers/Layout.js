import React, { useEffect, useState } from "react";
import { MenuTogglecontext } from "../context/menuToggleContext";
import { NotificationToggleContext } from "../context/menuToggleContext";
import Header from "../components/Header";
import SideBar from "../components/sideNavBar/SideBar";
import NotificationBar from "../components/header/NotificationBar";

const Layout = ({ children }) => {
    const [toggleValue, setToggleValue] = useState(false);
    const [notificationToggle, setNotificationToggle] = useState(false);

    return (
        <MenuTogglecontext.Provider value={{ toggleValue, setToggleValue }}>
            <NotificationToggleContext.Provider value={{ notificationToggle, setNotificationToggle }}>
                <Header />
                <SideBar />
                <NotificationBar />
                {children}
            </NotificationToggleContext.Provider>
        </MenuTogglecontext.Provider>
    );
};

export default Layout;
