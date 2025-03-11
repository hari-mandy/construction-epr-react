import React, { useState, useEffect } from 'react'
import bcrypt from 'bcryptjs'
import { useNavigate, Link } from "react-router-dom"
import Cookies from "js-cookie";
import InputText from '../inputs/InputText'
import CheckBox from '../inputs/CheckBox'
import fetchUserData from '../../hooks/fetchUserData'

const LoginForm = () => {
    const [userData, setUserData] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState({
        email: '',
        password: ''
    });
    const [remMe, setremMe] = useState('');
    const navigate = useNavigate();
    
    useEffect(() => {
        const token = Cookies.get("authToken");
        if (token) {
            navigate("/party-master");
        }
    }, []);

    const validateUser = async (event) => {
        event.preventDefault(); // Only needed if called from a form submission
        try {
            const isMatch = await bcrypt.compare(userPassword, userData);
            if (!isMatch) {
                setErrorMessage(prevState => ({ ...prevState, password: "*Password not Match*"}));
                return'';
            }
            if (remMe) {
                Cookies.set("authToken", event.response, {expires: 7});
            }
            navigate("/party-master");
        } catch (error) {
            alert("Error validating password:", error);
        }
    };

    const validateUserEmail = async(tagetvalue) => {
        try {
            const data = await fetchUserData('get-user?email=', tagetvalue);
            setUserData(data[0].password);
            setErrorMessage(prevState => ({...prevState, email: ""}));
        } catch {
            setErrorMessage(prevState => ({
                ...prevState,
                email: "*Check the Email Entered !"
            }));
        }
    }

    const handleEmail =  (e) => {
        const tagetvalue = e.target.value;
        if(tagetvalue === '') {
            setErrorMessage(prevState => ({...prevState, email: "*This Field is required*"}));
            return '';
        }
        validateUserEmail(tagetvalue);
    }

    return (
        <div className="login-form">
            <p className="login-eyebrow">WELCOME BACK</p>
            <h2 className="login-heading">Login to start your session</h2>
            <form onSubmit={validateUser}>
            <InputText containerStyle="input-text-block" labelTitle="Email" inputType="email" placeholder="" onBlurFun={handleEmail} name="email" errorMessage={errorMessage.email} inputStyle="input-text" labelStyle="input-label"/>
            <InputText containerStyle="input-text-block password-icon" labelTitle="Password" inputType="password" placeholder="" onChange={(e) => setUserPassword(e.target.value)} name="password" errorMessage={errorMessage.password} inputStyle="input-text" labelStyle="input-label"/>
                <div className="form-link-wrapper">
                    <CheckBox labelTitle="Remember me" containerStyle="checkbox-wrapper" labelStyle="checkbox-label" name="value1" inputStyle="input-checkmark" onChangeFun={() => setremMe(!remMe)} checkedValue={remMe} checkboxStyle="checkmark-icon"/>
                    <Link to="/forget-password" className="forgot-password-link">Forgot Password?</Link>
                </div>
                <input type="submit" value="Login" className="login-btn" />
            </form>
            <p className='register-link para-small'>Don't have an account yet?<Link to="/register"> Register</Link></p>
        </div>
    )
}

export default LoginForm
