import React, { useState, useEffect, useContext } from "react";
import { MenuTogglecontext, NotificationToggleContext } from "../context/menuToggleContext";
import Header from "../components/Header";
import SideBar from "../components/sideNavBar/SideBar";
import NotificationBar from "../components/header/NotificationBar";

const Layout = ({ children }) => {
    const { toggleValue, setToggleValue } = useContext(MenuTogglecontext);

    return (
        <>
            <Header />
            <SideBar />
            <NotificationBar />
            <div className={`main-content ${toggleValue ? "expand-main-content" : ""}`}>
                {children}
            </div>
        </>
    );
};

export default Layout;
