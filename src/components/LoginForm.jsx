import React, { useState } from 'react';
import passwordVisibleIcon from '../images/password-icon.svg'

const LoginForm = () => {
    const [showPasswword, setShowPassword] = useState('password');
    const [formData, setFormData] = useState({
        email: "",
        password: ""
      });

    const changePasswordType = () => {
        if(showPasswword == 'password') {
            setShowPassword('text');
        }
        else {
            setShowPassword('password');
        }
    }
  return (
    <div className="login-form">
        <p className="login-eyebrow">WELCOME BACK</p>
        <h2 className="login-heading">Login to start your session</h2>
        <form action="">
            <div className="input-text-block">
                <label for="email" className="input-label">Email</label>
                <input type="email" className="input-text" name="email" placeholder=''/>
            </div>
            <div className="input-text-block password-icon">
                <label for="password" className="input-label">Password</label>
                <input type={showPasswword} className="input-text" name="password" placeholder=' ' />
                <span className='password-visibe' onClick={changePasswordType}><img src={passwordVisibleIcon} alt="visible icon" /></span>
            </div>
            <div className="form-link-wrapper">
                <div className="checkbox-wrapper">
                    <label for="value1" className="checkbox-label"> Remember me
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
