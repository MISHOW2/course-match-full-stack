import React from 'react'
import '../styles/navbar.css'
import logo from '../assets/logo.png'
function NavBar() {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="middleNav">
        <ul>
          <li>Home</li>
          <li>How it Works</li>
          <li>Get Started</li>
        </ul>
      </div>

      <div className="login">
        <button>Login</button>
      </div>
    </nav>
  )
}

export default NavBar
