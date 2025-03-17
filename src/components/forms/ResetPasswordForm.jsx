import React, { useState, useEffect } from 'react'
import InputText from '../inputs/InputText'
import { useSearchParams } from "react-router-dom";
import fetchPostData from '../../hooks/fetchPostData'
import bcrypt from 'bcryptjs';
import { useNavigate } from "react-router-dom"
import fetchUserData from '../../hooks/fetchUserData';

const ResetPasswordForm = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const navigate = useNavigate();

   useEffect(() => {
    async function fetchToken() {
        const response = await fetchUserData('validtoken?token=', token);
        if (!response.isValid) {
          navigate("/invalid-token")
          return
        }
        return
    }
    fetchToken();
    }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const password = e.target.password.value;
    const rePassword = e.target.repassword.value;
    if(!password && !rePassword) {
      setErrorMessage('Fill your New Password');
      return;
    }
    if(!/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password)){
      setErrorMessage('Set strong password');
      return;
    }
    if (password !== rePassword ) {
      setErrorMessage('The password does not Match');
      return;
    }
    setErrorMessage('')
    const hashedPassword = await bcrypt.hash(password, 10);
    const newData = {password: hashedPassword, token: token}
    try {
      const data = await fetchPostData('resetpassword', newData);
      if (data === "success"){
        navigate("/login");
      }
    } catch {
        alert("connection failed !")
    }
  }

  return (
    <div className="login-form">
        <h2 className="login-heading">Set your New Password</h2>
        <form onSubmit={handleSubmit}>
            {errorMessage ? <p className='para-small error-mes txt-align-center'>{errorMessage}</p> : ''}
            <InputText containerStyle="input-text-block password-icon" labelTitle="Password" inputType="password" placeholder="" name="password" errorMessage='' inputStyle="input-text" labelStyle="input-label"/>
            <InputText containerStyle="input-text-block password-icon" labelTitle="Re-Enter Password" inputType="password" placeholder="" name="repassword" errorMessage=''inputStyle="input-text" labelStyle="input-label"/>
            <input type="submit" value="Set New Password" className="login-btn verify-email" />
        </form>
    </div>
  )
}

export default ResetPasswordForm
