import React from 'react'

const NotificationContent = () => {
    return(
        <>
             {
                [...Array(15)].map((_, i) => {
                    return <div key={i} className="notification-card">
                            {i % 2 === 0 ? `Your sales has increased by 30% yesterday` : `Total likes for instagram post - New launch this week,  has crossed 100k `}
                        </div> 
                })
            }
        </>
    )
}

export default NotificationContent
