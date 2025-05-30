import React from "react";
import brain from "../assets/images/brain.png";
import { FaCode } from "react-icons/fa";
import html from "../assets/images/html.png";
import css from "../assets/images/css.png";
import tailwind from "../assets/images/tailwind.png";
import js from "../assets/images/js.png";
import react from "../assets/images/react.png";
import next from "../assets/images/next.png";
import github from "../assets/images/github.png";

const Skills = () => {
  return (
    <div className="my-skills" id="skills">
      <h1 className="skills-title block">My Skills</h1>
      <div className="skills-box">
        <img src={brain} alt="" />
        <div className="skill-front-end block">
          <h1 className="gradient">Front-end</h1>
          <p>I'm learning the front-end part : 
            HTML, CSS, javascript
          </p>
        </div>
        <div className="skill-libraries block">
          <h1 className="gradient">Libraries & Frameworks</h1>
          <p>
            I'm also learning the Libraries, Frameworks and tools like : 
            ReactJs, React-router, Redux-ToolKit NextJs, tailwind css, git and github
          </p>
        </div>
      </div>
      <div className="skill-img-box block">
        <img src={html} alt="" />
        <img src={css} alt="" />
        <img src={tailwind} alt="" />
        <img src={js} alt="" />
        <img src={react} alt="" />
        <img src={next} alt="" />
        <img src={github} alt="" />
      </div>
    </div>
  );
};

export default Skills;
