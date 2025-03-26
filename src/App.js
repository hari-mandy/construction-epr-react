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

function App() {

    useEffect(() => {
        document.title = "Dummie ERP";
    }, []);

    return (
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
    );
}

export default App;
