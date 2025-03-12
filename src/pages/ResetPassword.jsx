import React from 'react'
import '../styles/login-page.css';
import  LoginSwiper  from '../components/LoginSwiper'
import ResetPasswordForm from '../components/forms/ResetPasswordForm'

const ResetPassword = () => {
  return (
    <div className='login-page'>
      <div className="login-content">
        <LoginSwiper />
        <ResetPasswordForm />
      </div>
    </div>
  )
}

export default ResetPassword
