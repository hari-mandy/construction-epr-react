import React from 'react';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import ProfileContent from '../components/ProfileContent';
import returnAuthToken from '../app/auth'

const PartyMaster = () => {
  
  returnAuthToken();
  return (
    <>
        <Header />
        <SideBar />
        <ProfileContent />
    </>
  )
}

export default PartyMaster;
