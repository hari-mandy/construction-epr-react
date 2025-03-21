import React from 'react'
import DashboardLinks from '../components/pageContents/DashboardLinks'
import Layout from '../containers/Layout'
import '../styles/dashboard.css'

const Dashboard = () => {
    return (
      <Layout>
          <DashboardLinks />
      </Layout>
    )
}

export default Dashboard
