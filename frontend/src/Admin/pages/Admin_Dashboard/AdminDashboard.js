import React from 'react'
import AdminHeader from '../../components/adminheader/AdminHeader'
import Sidebar from '../../components/sidebar/Sidebar'
import Home from '../home/Home';
import './admindashboard.css'
function AdminDashboard() {
  return (

    <div>
      <AdminHeader />
      <div className='side'>
        <Sidebar />
        <div className='home'>

          <Home />
        </div>

      </div>



    </div>
  )
}

export default AdminDashboard
