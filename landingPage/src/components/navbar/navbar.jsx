import React from 'react'
import './navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <p>Fitney<span>.</span></p>
      </div>
      <ul className="nav-menu">
        <li>Home</li>
        <li>Classes</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>
      <div className="nav-login">
        <button className='login-button'>Login</button>
        <button className='register-button'>Register</button>
      </div>
    </div>
  )
}

export default Navbar

