import React, { useState } from 'react'
import InputText from '../inputs/InputText'
import {Link} from 'react-router-dom'
import fetchUserData from '../../hooks/fetchUserData'


const ForgetPassword = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();

        const email = e.target.email.value;
        if(!email) {
            setErrorMessage("Please enter email Id");
            return ;
        }
        setErrorMessage('');
        try {
            const data = await fetchUserData('forgetPassword?email=', email);
            setSuccessMessage(data.message)
        } catch {
            console.log("connection failed !")
        }
    }

  return (
    <div className="login-form">
        <h2 className="login-heading">Enter Your Email Address</h2>
        <form onSubmit={handleSubmit}>
            {successMessage ? <p className='para-small success-mes'>{successMessage}</p> : ''}
            <InputText containerStyle="input-text-block" labelTitle="Email" inputType="email" placeholder="" name="email" errorMessage={errorMessage}inputStyle="input-text" labelStyle="input-label"/>
            <input type="submit" value="Verify Email" className="login-btn verify-email" />
        </form>
        <p className='register-link para-small'>Already have an Account ?<Link to="/login"> Login</Link></p>
    </div>
  )
}

export default ForgetPassword
