import React from 'react';
import {  NavLink } from 'react-bootstrap';
import '../navbar/navbar.css'

const CustomNavbar = () => {
  return (
    <header className='header'>
      <nav className='nav container'>
        <NavLink to="/" className='nav-log'>
        Navigation Bar
        </NavLink>

        <div className='nav-menu'>
          <ul className='nav-list'>
            <li className='nav-item'>
              <NavLink to="/" className='nav-link'>
              Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to="/news" className='nav-link'>
              News
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to="/dashbord" className='nav-link'>
              DashBord
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to="/" className='nav-link'>
                 settings
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to="/" className='nav-link'>
              Home
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default CustomNavbar;

