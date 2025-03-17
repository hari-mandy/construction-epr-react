import React from 'react'

const SubMenuTwo = ({items }) => {
  return (
    <li className='depth-2' key={items.name}>
        <a href={items.path}>
            <img src={items.iconLink} alt="items.name" />
            <h4>{items.name}</h4>
            </a>
    </li>
  )
}

export default SubMenuTwo
