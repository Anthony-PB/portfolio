import React from 'react';
import "../App.css";
//import PopGame from "./s-components/PopGame";

const About = () => {
  return (
    <div className="pad">
      <h2>About</h2>
      <div>
        <p className="lineH">
          Hello fellow human! My name is Anthony Paredes-Bautista, and I'm a passionate computer science student at Cornell University.
          I have a strong interest in web development and enjoy creating dynamic, user-friendly websites.
          My technical skills include proficiency in JavaScript, React, HTML, and CSS.
          Although my project portfolio isn't extensive yet,
          I am continuously expanding my knowledge and skills in web development, with a particular focus on front-end development, but 
          I am interested in other areas as well.
          Outside of coding, I enjoy playing video games, lifting weights, and listening to music.
        </p>
        <ul className="noStyle">
          <li><strong>Education:</strong></li>
          <li>School: Cornell University</li>
          <li>Year: Sophomore</li>
          <li>Expected Graduation Year: 2027</li>
          <li>Expected Major: Computer Science</li>
        </ul>
        <ul className="noStyle">
          <li><strong>Skills/Technologies:</strong></li>
          <li>Python: Intermediate</li>
          <li>Java: Intermediate (Most Used)</li>
          <li>Lua: Beginner</li>
          <li>JavaScript: Intermediate</li>
          <li>SQL: Beginner</li>
          <li>React.js Library: Intermediate</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
