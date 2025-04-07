import React, {useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom"
import userprofile from '../../images/profile-default.jpg'

const UserMenu = () => {
    const [userDetail, setUserDetail] = useState({});

    const navigate = useNavigate();
    useEffect(() => {
        const getUser = JSON.parse(localStorage.getItem("userDetail")) || JSON.parse(sessionStorage.getItem("userDetail")) ;
        if(!!getUser) {
            setUserDetail(getUser);
            return ;
        }
        navigate("/login")
    },[])

    const clearLocalStorage = () => {
        localStorage.clear();
        sessionStorage.clear();
        navigate("/login");
    }

  return (
    <div className="user-tab">
        <img className="user-avatar" src={userDetail.profile_img ? userDetail.profile_img : userprofile} alt="User profile"></img>
        <h4 className="user-name">{userDetail.username}</h4>
        <span className="dropdown-icon"></span>
        <ul className="user-info-list">
            <li className="user-detail">
                <img className="user-avatar" src={ userDetail.profile_img ? userDetail.profile_img : userprofile } alt="user"></img>
                <div>
                    <h6>{userDetail.username}</h6>
                    <a className="para-small user-email" href={`mailto:${userDetail.email}`}>{userDetail.email}</a>
                </div>
            </li>
            <li className="user-profile"><a href="/profile">My Profile</a></li>
            <li className="user-integration"><a href="/profile">Integrations</a></li>
            <li className="user-history"><a href="/profile">History</a></li>
            <li className="user-logout"><a onClick={clearLocalStorage}>Logout</a></li>
        </ul>
    </div>
  )
}

export default UserMenu
