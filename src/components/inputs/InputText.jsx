import React, { useState } from 'react'
import passwordVisibleIcon from '../../images/password-icon.svg';


const InputText = ({labelTitle, containerStyle, inputType, placeholder, onBlurFun, onChange, name, errorMessage, inputStyle, labelStyle}) => {

  const [showPassword, setShowPassword] = useState('password');
  const changePasswordType = () => {
      if(showPassword == 'password') {
          setShowPassword('text');
      }
      else {
          setShowPassword('password');
      }
  }
  return (
    <div className={containerStyle}>
        <label htmlFor={name} className={labelStyle}>{labelTitle}</label>
        <input type={inputType === 'password' ? (showPassword) : inputType} className={inputStyle} name={name} placeholder={placeholder} onBlur={onBlurFun} onChange={onChange}/>
        {inputType === 'password' ? <span className='password-visibe' onClick={changePasswordType}><img src={passwordVisibleIcon} alt="visible icon" /></span> : ''}
        {errorMessage && <span className="error-mes">{errorMessage}</span>}
    </div>
  )
}

export default InputText
