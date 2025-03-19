import React, {useState} from 'react'
import Header from '../components/Header'
import SideBar from '../components/sideNavBar/SideBar'
import ProfileContent from '../components/ProfileContent'
import returnAuthToken from '../app/auth'
import { MenuTogglecontext } from '../context/menuToggleContext'

const PartyMaster = () => {
  const [toggleValue, setToggleValue] = useState(false);

  returnAuthToken();
  return (
    <MenuTogglecontext.Provider value={{ toggleValue, setToggleValue }}>
        <Header />
        <SideBar />
        <ProfileContent />
    </MenuTogglecontext.Provider>
  )
}

export default PartyMaster;
