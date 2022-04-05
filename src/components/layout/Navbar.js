import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <header class="header" id="header">
        <div class="header_toggle"> <i class='bx bx-menu' id="header-toggle"></i> </div>
        <div class="header_img"> </div> 
        <div><i class='bx bxs-user' ></i> Admin</div>
    </header>
    <div class="l-navbar" id="nav-bar">
     <nav class="nav">
            <div> 
              <p  class="nav_logo"> <span class="nav_logo-name">HR React APP</span> </p>
               <div class="nav_list"> 
                <Link to="/dashboard" class="nav_link active"> <i class='bx bx-grid-alt nav_icon'></i> <span class="nav_name">Dashboard</span> </Link> 
                <a href="#" class="nav_link"> <i class='bx bx-user-pin nav_icon'></i> <span class="nav_name">Roles</span> </a> 
                <a href="#" class="nav_link"> <i class='bx bx-building-house nav_icon'></i> <span class="nav_name">Companys</span> </a> 
                <Link to="/" class="nav_link"> <i class='bx bxs-user-detail nav_icon'></i> <span class="nav_name">Users</span> </Link> 
                <a href="#" class="nav_link"> <i class='bx bx-calendar-x nav_icon'></i> <span class="nav_name">Leaves</span> </a> 
                <a href="#" class="nav_link"> <i class='bx bx-calendar nav_icon'></i> <span class="nav_name">Attendance</span> </a> 
                <a href="#" class="nav_link"> <i class='bx bxs-user nav_icon'></i> <span class="nav_name">Account</span> </a> 
                <a href="#" class="nav_link"> <i class='bx bx-log-out nav_icon'></i> <span class="nav_name">Logout</span> </a> 
              </div>
            </div>
      </nav>
    </div>
    </>
  )
}

export default Navbar