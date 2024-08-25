import React from 'react'
import "./Small.css"

function SidebarContent() {
  return (
    <div className="spread customLink">
      <p>Resources:</p>
      <a href = "https://leetcode.com/explore/" target="_blank" rel="noopener noreferrer">
      LeetCode</a>
      <a href = "https://algomap.io/" target="_blank" rel="noopener noreferrer">
      Data Structures & Algorithms</a>
      <a href = "https://www.w3schools.com/" target="_blank" rel="noopener noreferrer">
      Reminders On Syntax</a>
      <a href = "https://www.geeksforgeeks.org/" target="_blank" rel="noopener noreferrer">
      Learning/Revising</a>
      <a href = "https://www.youtube.com/" target="_blank" rel="noopener noreferrer">YouTube</a>
      </div>
  )
}

export default SidebarContent