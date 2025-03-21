import React from 'react'
import dashboardData from '../../data/dashboard-data'

const DashboardLinks = () => {
    const dashboardDetial = Object.entries(dashboardData);
    const dashboardItem = dashboardDetial[0][1];
    
  return (
    <div className='home-grid'>
    {dashboardItem.map((data, index) => {
        return (
            <a href={data.path} className='grid-item' key={index}>
                <img src={data.iconLink} alt={data.name} />
                <h2>{data.name}</h2>
            </a>
        )
    })
    }
    </div>
  )
}

export default DashboardLinks
