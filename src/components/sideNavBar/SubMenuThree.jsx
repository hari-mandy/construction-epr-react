import React from 'react'

const SubMenuThree = ({submenuItem}) => {
  return (
      <li className="depth-3" key={submenuItem.name}><p><a href={submenuItem.path}>{submenuItem.name}</a></p></li>
  )
}

export default SubMenuThree
