import React, { useContext} from 'react'
import NotificationContent from './NotificationContent'
import MenuCloseIcon from '../icons/MenuCloseIcon'
import '../../styles/notification-bar.css'
import { NotificationToggleContext } from '../../context/menuToggleContext'

const NotificationBar = () => {
		const { notificationToggle, setNotificationToggle } = useContext(NotificationToggleContext);

		const handleNotiffication = () => {
			if(!notificationToggle) {
				setNotificationToggle(true);
				return;
			}
			setNotificationToggle(false);
		}
  return (
    <div className={`notification-container ${notificationToggle ? `open-notification` : ''}`}>
        <div className="notification-list">
          <div className='notification-header'>
              <button className='close-button'  onClick={handleNotiffication}>
                  <MenuCloseIcon />
              </button>
              <h2>Notification</h2>
          </div> 
          <NotificationContent />
        </div>
        <a href="#" className="side-menubar-adjuster" onClick={handleNotiffication}></a>
    </div>
  )
}

export default NotificationBar
