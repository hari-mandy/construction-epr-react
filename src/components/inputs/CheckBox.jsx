import React from 'react'

const CheckBox = ({labelTitle, containerStyle, labelStyle, name, inputStyle, onChangeFun, checkedValue, checkboxStyle}) => {
  return (
    <div className={containerStyle} >
        <label htmlFor={name} className={labelStyle}> {labelTitle}
            <input type="checkbox" id={name} name={name} className={inputStyle}  checked={checkedValue} onChange={onChangeFun}/>
            <span className={checkboxStyle}></span>
        </label>
    </div>
  )
}

export default CheckBox