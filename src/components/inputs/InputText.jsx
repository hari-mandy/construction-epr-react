import React, { useState } from 'react'
import passwordVisibleIcon from '../../images/password-icon.svg';


const InputText = ({labelTitle, containerStyle, inputType, placeholder, onBlurFun, onChange, name, errorMessage, inputStyle, labelStyle, handleFocus, value, errorMessageAbove, searchButtonStyle, searchButtonIcon}) => {

  const [showPassword, setShowPassword] = useState('password');
  const changePasswordType = () => {
      if(showPassword === 'password') {
          setShowPassword('text');
      }
      else {
          setShowPassword('password');
      }
  }
  return (
    <div className={containerStyle}>
        <label htmlFor={name} className={labelStyle}>{labelTitle}</label>{errorMessageAbove ? <span className='error-mes'>{errorMessage}</span> : ''}
        {searchButtonIcon ? <button className={searchButtonStyle} >{searchButtonIcon}</button> : ''}
        <input type={inputType === 'password' ? (showPassword) : inputType} className={inputStyle} name={name} placeholder={placeholder} onBlur={onBlurFun} onFocus={handleFocus} onChange={onChange} value={value} />
        {inputType === 'password' ? <span className='password-visibe' onClick={changePasswordType}><img src={passwordVisibleIcon} alt="visible icon" /></span> : ''}
        {errorMessage && !errorMessageAbove ? <span className="error-mes">{errorMessage}</span> : ''}
    </div>
  )
}

export default InputText
