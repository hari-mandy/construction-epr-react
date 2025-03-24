import React, { useEffect, useState, useRef } from 'react'
import InputFile from '../inputs/InputFile'
import InputText from '../inputs/InputText'
import { userData } from '../../data/user-data'
import { handleUnique } from '../../services/login-services'

const ProfileForm = () => {

    const [userDetail, setUserDetail] = useState({
        id: userData.id,
        profile_img: userData.profile_img,
        name: userData.name,
        email: userData.email,
        username: userData.username,
        dateofbirth: userData.dateofbirth,
        permanent_address: userData.permanent_address,
        postal_code: userData.postal_code,
        present_address: userData.present_address,
        city: userData.city,
        country: userData.country
    });
    const [errMessage, setErrMessage] = useState({
        name: '',
        email: '',
        username: '',
    })
    const oldValue = useRef('');

    useEffect(() => {
        userDetail.dateofbirth = new Date(userDetail.dateofbirth).toISOString().split("T")[0];
    },[userDetail.dateofbirth])

    const handleFocus = (event) => { oldValue.current = event.target.value };

    const handleChange = (e, type) => {
        if( type === 'profile_img') {
            setUserDetail(prevState => ({...prevState, [type]: URL.createObjectURL(e.target.files[0])}));
            return ;
        }
        setUserDetail(prevState => ({...prevState,[type]: e.target.value}));
    }

    const handleBlur = async (type, value) => {
        const targetValue = value.target.value;
        if(targetValue === '') {
            setErrMessage(prevState => ({...prevState, [type]: '*This field is required*'}));
            return ;
        }
        if(oldValue.current !== targetValue && userData[type] !== targetValue ) {
            const returnValue = await handleUnique(type, value.target.value);
           if(returnValue) {
                setErrMessage(prevState => ({...prevState, [type]: returnValue}));
                return ;
           }
        }
        setErrMessage(prevState => ({...prevState, [type]: ''}));
    }

    const handleSubmit= (e) => {
        e.prevent.default();
        
    }

    return (
        <div className='registration-form-container'>
            <form className="profile-form" onSubmit={handleSubmit}>
                <div className="registration-form-container">
                    <div className="form-column">
                        <InputFile containerStyle="field-profile" inputType="file" name="profile_img" acceptType="" onChange={(e) => handleChange(e,'profile_img')} imgSrc={userDetail.profile_img}/>
                    </div>
                    <div className="form-column">
                        <InputText labelTitle="First Name" containerStyle="name-field" inputType="text" name="name" value={userDetail.name} onChange={(e) => handleChange(e, 'name')} errorMessage={errMessage.name} onBlurFun={(e) => handleBlur('name', e)} errorMessageAbove="true"/>
                        <InputText labelTitle="Email" containerStyle="email-field" inputType="email" name="email" value={userDetail.email} onChange={(e) => handleChange(e, 'email')} handleFocus={handleFocus} onBlurFun={(e) => handleBlur('email', e)} errorMessage={errMessage.email} errorMessageAbove="true"/>
                        <InputText labelTitle="Date Of Birth" containerStyle="date-field" inputType="date" name="dateofbirth" value={userDetail.dateofbirth} onChange={(e) => handleChange(e, 'dateofbirth')} />
                        <InputText labelTitle="Permanent Address" containerStyle="name-field" inputType="text" name="permanent_address" value={userDetail.permanent_address} onChange={(e) => handleChange(e, 'permanent_address')} />
                        <InputText labelTitle="Postal Code" containerStyle="name-field" inputType="text" name="postal_code" value={userDetail.postal_code} postal_code onChange={(e) => handleChange(e, 'postal_code')} />
                    </div>
                    <div className="form-column">
                        <InputText labelTitle="User Name" containerStyle="name-field" inputType="text" name="username" value={userDetail.username} onChange={(e) => handleChange(e, 'username')} onBlurFun={(e)=> handleBlur('username',e)} handleFocus={handleFocus} errorMessage={errMessage.username} errorMessageAbove="true"/>
                        <InputText labelTitle="Present Address" containerStyle="name-field" inputType="text" name="present_address" value={userDetail.present_address} onChange={(e) => handleChange(e, 'present_address')} />
                        <InputText labelTitle="City" containerStyle="name-field" inputType="text" name="city" value={userDetail.city} onChange={(e) => handleChange(e, 'city')} />
                        <InputText labelTitle="Country" containerStyle="name-field" inputType="text" name="country" value={userDetail.country} onChange={(e) => handleChange(e, 'country')} />
                    </div>
                </div>
                <InputText inputType="submit" value="save" inputStyle="primary-btn" containerStyle="submit-btn-container" />
            </form>
        </div>
    )
}

export default ProfileForm
