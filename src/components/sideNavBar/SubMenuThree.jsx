import React from 'react'

const SubMenuThree = ({submenuItem, index}) => {
  return (
      <li className="depth-3" key={index}><p><a href={submenuItem.path}>{submenuItem.name}</a></p></li>
  )
}

export default SubMenuThree
