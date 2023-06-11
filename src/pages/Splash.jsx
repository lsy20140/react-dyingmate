import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import '../styles/splash.css'

export default function Splash() {

  const navigate = useNavigate()

  const [goLogin, setGoLogin] = useState(false)

  function handleClick() {
    setGoLogin(true)
    navigate('/login')
  }

  return (
    <div className={`overlay ${goLogin ? "overlay--disable" : ""}`}>
      <div className={`splash ${goLogin ? "splash--disappear" : ""}`}>
        <h1 className="title">
          Dying Mate
        </h1>
        <p
          className="start"
          onClick={handleClick}
        >
          Click to Start
        </p>
      </div>
    </div>
  )
}
