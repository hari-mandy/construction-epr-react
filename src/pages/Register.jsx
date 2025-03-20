import React, { useEffect } from 'react'
import '../styles/login-page.css';
import  LoginSwiper  from '../components/LoginSwiper'
import  RegisterForm  from '../components/forms/RegisterForm'
import { checkLocalUser } from '../services/login-services'
import { useNavigate } from "react-router-dom"

const Register = () => {
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
          <RegisterForm />
        </div>
      </div>
    )
}

export default Register
