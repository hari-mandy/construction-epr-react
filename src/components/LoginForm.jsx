import React, { useState, useEffect } from 'react'
import bcrypt from 'bcryptjs'
import { useNavigate } from "react-router-dom"
import InputText from './inputs/InputText'
import CheckBox from './inputs/CheckBox'

const LoginForm = () => {
    const [userData, setUserData] = useState('');
    const [usermail, setUsermail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [emailerror, setEmailError] = useState('');
    const [passworderror, setPasswordError] = useState('');
    const [remMe, setremMe] = useState('');
    const navigate = useNavigate();
    
    useEffect(() => {
        const userStore = localStorage.getItem("usermail");
        const passStore = localStorage.getItem("password");
        if (userStore && passStore ) {
            validateUserEmail(userStore);
            const isMatch = bcrypt.compare(passStore, userData);
            if (!isMatch) {
                setPasswordError("*Password not Match*");
            } else {
                navigate("/party-master");
            }
        }
    }, []);

    const handelPassword = (e) => {
        setUserPassword(e.target.value);
    }

    const validateUser = async (event) => {
        event.preventDefault(); // Only needed if called from a form submission
    
        try {
            const isMatch = await bcrypt.compare(userPassword, userData);
            
            if (!isMatch) {
                setPasswordError("*Password not Match*");
            } else {
                if (remMe) {
                    localStorage.setItem("usermail", usermail);

                    localStorage.setItem("password", userPassword);
                    navigate("/party-master");
                }
                navigate("/party-master");
            }
        } catch (error) {
            console.error("Error validating password:", error);
        }
    };
    
    const validateUserEmail = async(tagetvalue) => {
        try {
            const response = await fetch(`http://localhost:3001/get-user?email=${tagetvalue}`);
            const data = await response.json();
            setUserData(data[0].password);
          } catch (error) {
              setEmailError("*Check the Email Entered !")
          }
    }

    const handleEmail =  (e) => {
        const tagetvalue = e.target.value;
        if(tagetvalue === '') {
            setEmailError("*This Field is required*");
        } else {
            setUsermail(tagetvalue);
            validateUserEmail(tagetvalue);
        }
    }
  return (
    <div className="login-form">
        <p className="login-eyebrow">WELCOME BACK</p>
        <h2 className="login-heading">Login to start your session</h2>
        <form onSubmit={validateUser}>
           <InputText containerStyle="input-text-block" labelTitle="Name" inputType="text" placeholder="" onBlurFun={handleEmail} name="email" errorMessage={emailerror} inputStyle="input-text" labelStyle="input-label"/>
           <InputText containerStyle="input-text-block password-icon" labelTitle="Password" inputType="password" placeholder="" onChange={handelPassword} name="password" errorMessage={passworderror} inputStyle="input-text" labelStyle="input-label"/>

            <div className="form-link-wrapper">
                <CheckBox labelTitle="Remember me" containerStyle="checkbox-wrapper" labelStyle="checkbox-label" name="value1" inputStyle="input-checkmark" onChangeFun={() => setremMe(!remMe)} checkedValue={remMe} checkboxStyle="checkmark-icon"/>
                <a href="#" className="forgot-password-link">Forgot Password?</a>
            </div>
            <input type="submit" value="Login" className="login-btn" />
        </form>
    </div>
  )
}

export default LoginForm
