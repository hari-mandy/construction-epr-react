import React, { useState } from 'react'
import {Link } from 'react-router-dom'
import InputText from '../inputs/InputText'
import fetchUserData from '../../hooks/fetchUserData'

const RegisterForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', username: '', password: '' });
    const [errorMessage, setErrorMessage] = useState ({ name: '', email: '', username: '', password: '' });
    const reqiredMes = "*This Field is required*"

    const handleEmpty = (e, type) => {
        const value = e.target.value;
        if (!value) {  // Check if the input is empty
            setErrorMessage(prevState => ({...prevState,[type]: reqiredMes}));
            return '';
        }
        if (type === 'password' && !/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(e.target.value)) {
            setErrorMessage(prevState => ({...prevState, [type]: "*Set a strong Password!*"}));
            return '';
        }
        setErrorMessage(prevState => ({...prevState, [type]: ""}));
        setFormData(prevState => ({...prevState, [type]: value}));
    };
    
    const validateUser = async (tagetvalue, type) => {
        try {
            let response = {}; // Declare response as a mutable variable
    
            if (type === 'username') {
                response = await fetchUserData('check-username?username=', tagetvalue);
            } else if (type === 'email') {
                response = await fetchUserData('check-email?email=', tagetvalue);
            }
            if (response.isUnique) {
                setErrorMessage(prevState => ({...prevState, [type]: "" }));
                setFormData(prevState => ({...prevState, [type]: tagetvalue }));
                return ;
            } 
            setErrorMessage(prevState => ({...prevState, [type]: "*Is already in use*" }));

        } catch (error) {
            alert('Error checking value');
        }
    };
    
    const checkUnique = (e, type) => {
        const tagetvalue = e.target.value;
        if (tagetvalue === '') {
            setErrorMessage(prevState => ({...prevState, [type]: reqiredMes}));
            return;
        } 
        validateUser(tagetvalue, type);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if(formData.name == '') { setErrorMessage(prevState => ({...prevState, name: "*this field is required*" })); return '' }
        if(formData.email == '') { setErrorMessage(prevState => ({...prevState, name: "*this field is required*" })); return '' }
        if(formData.username == '') { setErrorMessage(prevState => ({...prevState, name: "*this field is required*" })); return '' }
        if(formData.password == '') { setErrorMessage(prevState => ({...prevState, name: "*this field is required*" })); return '' }
        
    }
    

    return (
        <div className="login-form" >
            <h2 className="login-heading">Welcome To Dummie ERP</h2>
            <form onSubmit = {handleSubmit} >
                <InputText containerStyle="input-text-block" labelTitle="Name" inputType="text" placeholder="" onBlurFun={(e) => handleEmpty(e, 'name')} name="name" errorMessage={errorMessage.name} inputStyle="input-text" labelStyle="input-label"/>
                <InputText containerStyle="input-text-block" labelTitle="User Name" inputType="text" placeholder="" onBlurFun={(e) => checkUnique(e, 'username')} name="username" errorMessage={errorMessage.username} inputStyle="input-text" labelStyle="input-label"/>
                <InputText containerStyle="input-text-block" labelTitle="Email" inputType="email" placeholder="" name="email" onBlurFun={(e) => checkUnique(e, 'email')} errorMessage={errorMessage.email}inputStyle="input-text" labelStyle="input-label"/>
                <InputText containerStyle="input-text-block password-icon" labelTitle="Password" inputType="password" placeholder="" name="password" errorMessage={errorMessage.password} inputStyle="input-text" labelStyle="input-label" onBlurFun={(e) => handleEmpty(e, 'password')}/>
                <input type="submit" value="Register" className="login-btn register-btn" />
                <p className='register-link para-small'>Already have an Account ?<Link to="/login"> Login</Link></p>
            </form>
        </div>
    )
}

export default RegisterForm
