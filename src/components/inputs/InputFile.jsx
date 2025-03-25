import React from 'react'

const InputFile = ({containerStyle, imgSrc, imgAlt, name, acceptType, onChange, errorMessage}) => {
  return (
    <>
        <div className={containerStyle}>
            {imgSrc  ? <img src={imgSrc} alt={imgAlt} width="100%" height="100%" /> : ''}
            <input type="file" name={name} accept={acceptType} onChange={onChange}/>
        </div>
        {errorMessage ? <span className='error-mes'>{errorMessage}</span> : ''}
    </>
  )
}

export default InputFile
