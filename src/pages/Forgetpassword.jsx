import React from 'react'
import '../styles/login-page.css';
import  LoginSwiper  from '../components/LoginSwiper'
import  ForgetPassword  from '../components/forms/ForgetPassword'

const Forgetpassword = () => {
  return (
    <div className='login-page'>
        <div className="login-content">
            <LoginSwiper />
            <ForgetPassword />
        </div>
    </div>
  )
}

export default Forgetpassword
