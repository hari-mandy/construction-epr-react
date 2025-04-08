import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import PartyMaster from "./pages/Partymaster";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgetPassword from "./pages/Forgetpassword";
import ResetPassword from "./pages/ResetPassword";
import InvalidToken from "./pages/InvalidToken";
import Matters from "./pages/Matters";
import React from "react";
import { filterUsersContext } from "./context/filterUsersContext";
import { filterUrlContext } from "./context/filterUrlContext";
import { MenuTogglecontext, NotificationToggleContext } from "./context/menuToggleContext";
import { themeToggleContext } from "./context/themeToggleContext";

function App() {

    useEffect(() => {
        document.title = "Dummie ERP";
        document.documentElement.setAttribute('data-theme', theme);
    }, []);

    const [usersList, setUsersList] = useState({});
    const [filterUrl, setFilterUrl] = useState({
        search : '',
        city : ''
    });
    const [toggleValue, setToggleValue] = useState(false);
    const [notificationToggle, setNotificationToggle] = useState(false);
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light";
      });
    
    

    return (
        <themeToggleContext.Provider value={{ theme, setTheme }}>
            <filterUsersContext.Provider value={{ usersList, setUsersList }} >
                <filterUrlContext.Provider value={{ filterUrl, setFilterUrl }} >
                    <MenuTogglecontext.Provider value={{ toggleValue, setToggleValue }}>
                        <NotificationToggleContext.Provider value={{ notificationToggle, setNotificationToggle }}>
                            <Router>
                                <Routes>
                                    <Route path="/" element={<Dashboard />} />
                                    <Route path="/profile" element={<PartyMaster />} />
                                    <Route path="/dashboard" element={<Dashboard />} />
                                    <Route path="/invalid-token" element={<InvalidToken />} />
                                    <Route path="/matters" element={<Matters />} />
                                    <Route path="/login" element={<Login />} />
                                    <Route path="/register" element={<Register />} />
                                    <Route path="/forget-password" element={<ForgetPassword />} />
                                    <Route path="/reset-password" element={<ResetPassword />} />
                                </Routes>
                            </Router>
                        </NotificationToggleContext.Provider>
                    </MenuTogglecontext.Provider>
                </filterUrlContext.Provider>
            </filterUsersContext.Provider>
        </themeToggleContext.Provider>

    );
}

export default App;
