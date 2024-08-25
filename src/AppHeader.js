import React from 'react'
import "./App.css"
import placeholder from "./images/placeholder.png";
import email from "./images/email.png";
import github from "./images/github.png";
import linkedin from "./images/linkedin.png";

function AppHeader() {
  return (
    <header className="App-header">
        <p className="myName">
        Anthony Paredes-Bautista
        </p>
        <div className="profile-container">
          <img className="profile-pic" src={placeholder} title="Profile Picture TBD" alt="Profile" />
          <div className="social-icons">
            <a href="mailto:anthonyparedesb0@gmail.com" target="_blank" rel="noopener noreferrer">
              <img  className="App-logo" src={email} alt="Email" />
            </a>
            <a href="https://github.com/Anthony-PB" target="_blank" rel="noopener noreferrer">
              <img className="App-logo" src={github} alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/anthony-paredes-bautista-pb" target="_blank" rel="noopener noreferrer">
              <img className="App-logo" src={linkedin} alt="LinkedIn" />
            </a>
          </div>
        </div>
      </header>
  )
}

export default AppHeader
