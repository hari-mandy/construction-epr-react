import React from 'react'
import '../styles/login-page.css';
import  LoginSwiper  from '../components/LoginSwiper'
import  RegisterForm  from '../components/forms/RegisterForm'

const Register = () => {
  return (
    <div className='login-page'>
      <div className="login-content">
        <LoginSwiper />
        <RegisterForm />
      </div>
    </div>
  )
}

export default Register
