import React from 'react'
import {Outlet} from 'react-router-dom'
import './LoginPage.css'
import kaduriflixLogo from '../assets/kaduriflix-logo.png'


function LoginPage() {
  return (
    <div className="login-page">
      <img className="kaduriflix-big-logo" src={kaduriflixLogo} alt = "Logo"/>
      <Outlet/>
    </div>

  )
}

export default LoginPage