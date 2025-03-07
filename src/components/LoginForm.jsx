import React, { useState } from 'react';
import bcrypt from 'bcryptjs';
import { useNavigate } from "react-router-dom";
import passwordVisibleIcon from '../images/password-icon.svg';

const LoginForm = () => {
    const [showPasswword, setShowPassword] = useState('password');
    const [userData, setUserData] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [emailerror, setEmailError] = useState('');
    const [passworderror, setPasswordError] = useState('');
    const navigate = useNavigate();
    

    const changePasswordType = () => {
        if(showPasswword == 'password') {
            setShowPassword('text');
        }
        else {
            setShowPassword('password');
        }
    }

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
                navigate("/party-master");
            }
        } catch (error) {
            console.error("Error validating password:", error);
        }
    };
    
    

    const handleEmail =  (e) => {
        const tagetvalue = e.target.value;
        if(tagetvalue === '') {
            setEmailError("*This Field is required*");
        } else {
            const validateUserEmail = async(tagetvalue) => {
                try {
                  const response = await fetch(`http://localhost:3001/get-user?email=${tagetvalue}`);
                  const data = await response.json();
                  setUserData(data[0].password);
                } catch (error) {
                    setEmailError("*Check the Email Entered !")
                }
            }
            validateUserEmail(tagetvalue);
        }

    }
  return (
    <div className="login-form">
        <p className="login-eyebrow">WELCOME BACK</p>
        <h2 className="login-heading">Login to start your session</h2>
        <form onSubmit={validateUser}>
            <div className="input-text-block">
                <label htmlFor="email" className="input-label">Email</label>
                <input type="email" className="input-text" name="email" placeholder='' onBlur={handleEmail}/>
                {emailerror && <span className="error-mes">{emailerror}</span>}
            </div>
            <div className="input-text-block password-icon">
                <label htmlFor="password" className="input-label">Password</label>
                <input type={showPasswword} className="input-text" name="password" placeholder=' 'onChange={handelPassword}/>
                <span className='password-visibe' onClick={changePasswordType}><img src={passwordVisibleIcon} alt="visible icon" /></span>
                {passworderror && <span className="error-mes">{passworderror}</span>}
            </div>
            <div className="form-link-wrapper">
                <div className="checkbox-wrapper">
                    <label htmlFor="value1" className="checkbox-label"> Remember me
                        <input type="checkbox" id="value1" name="value1" value="value1" className="input-checkmark" />
                        <span className="checkmark-icon"></span>
                    </label>
                </div>
                <a href="#" className="forgot-password-link">Forgot Password?</a>
            </div>
            <input type="submit" value="Login" className="login-btn" />
        </form>
    </div>
  )
}

export default LoginForm
