import React, { useState, useEffect } from 'react'
import SubMenuThree from './SubMenuThree'
import { useLocation } from 'react-router-dom'


const SubMenuTwo = ({items}) => {
    const location = useLocation()
    const [active, SetActive] = useState(false);

    useEffect(() => {
      if(items.path === location.pathname) {
        SetActive(true);
      }
    }, [])
    
    const openMenu = () => {
      if(items.subMenu.length > 0) {
        if(!active) {
          SetActive(true);
          return ;
        }
        SetActive(false);
      }
    }

    return (
      <li className={`depth-2 ${active ? "show-menu" : ""}`} key={items.name}>
          <a href={items.path} onClick={openMenu}>
              <img src={items.iconLink} alt={items.name} />
              <h4>{items.name}</h4>
          </a>
            {items.subMenu.length > 0 ? 
              (<ul className="side-menu-list-depth-3">
                    {items.subMenu.map((submenuItem) => (
                        <SubMenuThree submenuItem={submenuItem} />
                    ))}
                </ul>) : ('')
            }
      </li>
    )
}

export default SubMenuTwo
