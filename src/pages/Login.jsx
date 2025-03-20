import React, { useEffect } from 'react';
import '../styles/login-page.css';
import  LoginSwiper  from '../components/LoginSwiper'
import  LoginForm  from '../components/forms/LoginForm'
import { checkLocalUser } from '../services/login-services'
import { useNavigate } from "react-router-dom"

const Login = () => {
    const navigate = useNavigate();
  
    useEffect(() => {
        const validUser = checkLocalUser();
        if (validUser) {
            navigate("/party-master");
            return;
        }
        return ;
    }, []);
 
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
