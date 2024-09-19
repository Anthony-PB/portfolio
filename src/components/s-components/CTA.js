import React from 'react'
import "./Small.css"
import APB_PDF from "./DownloadFiles/Anthony_Paredes_Resume.pdf"

function CTA() {
  return (
    <div className="spread">
      <h2>Greetings, I am Anthony Paredes</h2>
      <p>Computer Science Student | Tech Enthusiast</p>
      <a className="downloadLink" href= {APB_PDF} download="Anthony_Paredes_Resume.pdf" rel="noopener noreferrer">
      <h3 >Download My Resume</h3>
    </a>
    </div>
  )
}

export default CTA