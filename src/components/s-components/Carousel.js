import React from 'react'
import "./car.css"
import react from "./ImagesCar/React.png"
import python from "./ImagesCar/python.png"
import javascript from "./ImagesCar/javascript-logo-0.png"
import java from "./ImagesCar/java.png"
import lua from "./ImagesCar/lua.png"
function Carousel() {
  return (
    // Had to tweak the element number a bit to make the keyframe animation work. I believe this can be resolved
    // when I get some tech under my belt.
    <div className= "logos">
      <div className= "logos-slide">
        <img src = {react} alt = "React" />
        <img src = {python} alt = "Python"/>
        <img src = {javascript} alt = "Javascript"/>
        <img src = {java} alt = "Java"/>
        <img src = {lua} alt = "Lua"/>
        <img src = {react} alt = "React" />
        <img src = {python} alt = "Python"/>
        <img src = {javascript} alt = "Javascript"/>
        <img src = {java} alt = "Java"/>
        <img src = {lua} alt = "Lua"/>
      </div>
      <div className= "logos-slide">
        <img src = {react} alt = "React" />
        <img src = {python} alt = "Python"/>
        <img src = {javascript} alt = "Javascript"/>
        <img src = {java} alt = "Java"/>
        <img src = {lua} alt = "Lua"/>
        <img src = {react} alt = "React" />
        <img src = {python} alt = "Python"/>
        <img src = {javascript} alt = "Javascript"/>
        <img src = {java} alt = "Java"/>
        <img src = {lua} alt = "Lua"/>
      </div>
    </div>
  )
}

export default Carousel