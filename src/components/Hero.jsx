import React from "react";
import { MdOutlineDiamond } from "react-icons/md";
import { IoSend } from "react-icons/io5";
import TiltCard from "./TiltCard";
import ibrahim from "../assets/images/ibrahim.jpeg";

const Hero = () => {
  return (
    <div className="hero"   data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0"
     data-aos-duration="1000">
      <div
        className="hero-info"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0"
        data-aos-duration="1000"
      >
        <div className="hero-info-title">
          <MdOutlineDiamond />
          Front-end Developer Portfolio
        </div>
        <h1>
          Providing <span className="gradient">the best</span> Poject{" "}
          <span className="gradient">Experience</span>{" "}
        </h1>
        <p>
          I'm a Front-end Web Developer with some awesome skills. Check out my
          skills
        </p>
       <a href="#contact">
         <button>
          <IoSend /> Contact Me
        </button>
       </a>
      </div>
      <TiltCard image={ibrahim}>
        <h3 className="tilt-card-title">Mahammad Ibrahim Makashi</h3>
        <p className="gradient">A Front-end Web Developer</p>
      </TiltCard>
    </div>
  );
};

export default Hero;
