import React, { useState, useEffect, useRef } from 'react'
import { useNavigate, Link } from "react-router-dom"
import InputText from '../inputs/InputText'
import CheckBox from '../inputs/CheckBox'
import { handleEmail, validateUser } from '../../services/login-services'
import SubmitButton from '../inputs/SubmitButton'

const LoginForm = () => {
    const [userdata, setUserData] = useState({});
    const [errorMessage, setErrorMessage] = useState({ email: '', password: '' });
    const [remMe, setremMe] = useState('');
    const navigate = useNavigate();
    const oldEmailValue = useRef('');

    const handleFocus = (event) => {
        oldEmailValue.current = event.target.value; // Update on focus
    };
    
    useEffect(() => {
        const token = localStorage.getItem("authToken");
        if (token) {
            navigate("/party-master");
        }
    }, []);
    
    const onUserPassword = (e) => {
        setErrorMessage(prevState => ({ ...prevState, password: '' }));
    }

    const validUser = async (e) => {
        const EnteredPass = e.target.password.value;
        const validUserReturn = await validateUser(e, userdata, EnteredPass, remMe, errorMessage.email);
        if (validUserReturn === 'success') {
            navigate("/party-master");
            return ;
        }
        setErrorMessage(prevState => ({ ...prevState, password: validUserReturn }));
    }

    const handleunique = async (e, requireMes = '*This Field is required*', checkMailMes = '*Check the Mail Entered !') => {
        if(oldEmailValue.current !== e.target.value || oldEmailValue !== '') {
            const returnValue = await handleEmail(e.target.value, requireMes, checkMailMes );
            if (returnValue ===  requireMes || returnValue === checkMailMes) {
                setErrorMessage(prevState => ({ ...prevState, email: returnValue }));
                return ;
            }
            setErrorMessage(prevState => ({ ...prevState,email: '' }));
            setUserData(returnValue);
            return ;
        }
        return
    }

    return (
        <div className="login-form">
            <p className="login-eyebrow">WELCOME BACK</p>
            <h2 className="login-heading">Login to start your session</h2>
            <form onSubmit={validUser}>
                <InputText containerStyle="input-text-block" labelTitle="Email" inputType="email" placeholder="" onBlurFun={handleunique} name="email" errorMessage={errorMessage.email} inputStyle="input-text" labelStyle="input-label" handleFocus={handleFocus}/>
                <InputText containerStyle="input-text-block password-icon" labelTitle="Password" inputType="password" placeholder="" onChange={onUserPassword} name="password" errorMessage={errorMessage.password} inputStyle="input-text" labelStyle="input-label"/>
                <div className="form-link-wrapper">
                    <CheckBox labelTitle="Remember me" containerStyle="checkbox-wrapper" labelStyle="checkbox-label" name="value1" inputStyle="input-checkmark" onChangeFun={() => setremMe(!remMe)} checkedValue={remMe} checkboxStyle="checkmark-icon"/>
                    <Link to="/forget-password" className="forgot-password-link">Forgot Password?</Link>
                </div>
                <SubmitButton buttonType="submit" value="Login" buttonStyle="login-btn"/>
            </form>
            <p className='register-link para-small'>Don't have an account yet?<Link to="/register"> Register</Link></p>
        </div>
    )
}

export default LoginForm