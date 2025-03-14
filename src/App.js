import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import PartyMaster from "./pages/Partymaster";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgetPassword from "./pages/Forgetpassword";
import ResetPassword from "./pages/ResetPassword";
import returnAuthToken from "./app/auth";

function App() {
    const [tokenValid, setTokenValid] = useState(false);
    const [loading, setLoading] = useState(true); // Prevents premature redirection

    useEffect(() => {
        document.title = "Dummie ERP";
    }, []);

    useEffect(() => {
        const checkToken = async () => {
            try {
                const token = await returnAuthToken(); // Await the token response
                if (token === "success") {
                    setTokenValid(true);
                }
            } catch (error) {
                console.error("Error checking token:", error);
            }
            setLoading(false); // Ensure loading is completed
        };
        checkToken();
    }, []);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<PartyMaster />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forget-password" element={<ForgetPassword />} />
                <Route path="/reset-password" element={<ResetPassword />} />
                <Route path="*" element={<Navigate to={tokenValid ? "/" : "/login"} replace />} />
            </Routes>
        </Router>
    );
}

export default App;
