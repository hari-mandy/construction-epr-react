import React from 'react'
import  LoginSwiper  from '../components/LoginSwiper'
import {Link } from 'react-router-dom'

const InvalidToken = () => {
  return (
<div className='login-page'>
        <div className="login-content">
            <LoginSwiper />
            <div className="login-form">
                <h2 className="login-heading">This Link Has been Expired !</h2>
                <p className='register-link para-small'>Please back to Login page : <Link to="/login"> Login </Link></p>
            </div>
        </div>
    </div>
  )
}

export default InvalidToken
