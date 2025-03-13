import React from 'react'

const SubmitButton = ({buttonType, value, buttonStyle}) => {
  return (
    <>
        <input type={buttonType}  value={value} className={buttonStyle} />
    </>

  )
}

export default SubmitButton
