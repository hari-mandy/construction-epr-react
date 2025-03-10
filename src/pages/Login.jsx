import React from 'react';
import '../styles/login-page.css';
import  LoginSwiper  from '../components/LoginSwiper'
import  LoginForm  from '../components/LoginForm'


const Login = () => {
  return (
    <div className='login-page'>
      <div className="login-content">
        <LoginSwiper />
        <LoginForm />
      </div>
    </div>
  )
}

export default Login;
