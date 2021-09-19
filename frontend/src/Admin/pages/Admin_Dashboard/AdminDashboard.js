import React from 'react'
import AdminHeader from '../../components/adminheader/AdminHeader'
import Sidebar from '../../components/sidebar/Sidebar'
import {  useSelector } from 'react-redux'
import Home from '../home/Home';
import './admindashboard.css'
function AdminDashboard(history) {
  const adminLogin = useSelector((state) => state.adminLogin)
  const { adminInfo } = adminLogin
  if (!adminInfo ) {
    document.location.href = '/'
  }
console.log(adminInfo.token)
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
