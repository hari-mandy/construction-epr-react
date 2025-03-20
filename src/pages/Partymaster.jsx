import React, {useState} from 'react'
import Header from '../components/Header'
import SideBar from '../components/sideNavBar/SideBar'
import ProfileContent from '../components/ProfileContent'
import returnAuthToken from '../app/auth'
import NotificationContent from '../components/header/NotificationBar'
import { MenuTogglecontext, NotificationToggleContext } from '../context/menuToggleContext'

const PartyMaster = () => {
  const [toggleValue, setToggleValue] = useState(false);
  const [notificationToggle, setNotificationToggle] = useState(false);

  returnAuthToken();
  return (
    <MenuTogglecontext.Provider value={{ toggleValue, setToggleValue }}>
        <NotificationToggleContext.Provider value={{ notificationToggle, setNotificationToggle}}>
            <Header />
            <SideBar />
            <NotificationContent />
            <ProfileContent />
        </NotificationToggleContext.Provider>
    </MenuTogglecontext.Provider>
  )
}

export default PartyMaster;
