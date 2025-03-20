import React, { useContext, useEffect } from 'react'
import NotificationContent from './NotificationContent'
import MenuCloseIcon from '../icons/MenuCloseIcon'
import '../../styles/notification-bar.css'
import { NotificationToggleContext } from '../../context/menuToggleContext'

const NotificationBar = () => {
		const { notificationToggle, setNotificationToggle } = useContext(NotificationToggleContext);

		const handleNotification = () => {
			if(!notificationToggle) {
				setNotificationToggle(true);
				return;
			}
			setNotificationToggle(false);
		}

		useEffect(() => {
			if (notificationToggle) {
				document.body.classList.add('scroll-lock-notification');
			} else {
				document.body.classList.remove('scroll-lock-notification');
			}
		}, [notificationToggle]);

  return (
    <div className={`notification-container ${notificationToggle ? `open-notification` : ''}`}>
        <div className="notification-list">
          <div className='notification-header'>
              <button className='close-button'  onClick={handleNotification}>
                  <MenuCloseIcon />
              </button>
              <h2>Notification</h2>
          </div> 
          <NotificationContent />
        </div>
        <a href="#" className="side-menubar-adjuster" onClick={handleNotification}></a>
    </div>
  )
}

export default NotificationBar
