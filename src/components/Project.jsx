import React, { useRef } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import swiggy from "../assets/videos/swiggy.mp4";
import netflix from "../assets/videos/NetflixGPT.mp4";
import youtube from "../assets/videos/youtube.mp4";
import { TbPoint } from "react-icons/tb";

const Project = () => {
  const video01 = useRef();
  const video02 = useRef();
  const video03 = useRef();

  const handleVideoPlay = (v) => {
    v.current?.play();
  };

  const handleVideoPause = (v) => {
    v.current?.pause();
  };

  return (
    <div id="projects" className="my-projects">
      <h1 className="block">My Projects</h1>

      {/* Swiggy Project */}
      <div className="project-card block">
        <div className="project-vid">
          <video
            ref={video01}
            muted
            loop
            onMouseEnter={() => handleVideoPlay(video01)}
            onMouseLeave={() => handleVideoPause(video01)}
            src={swiggy}
          ></video>
        </div>
        <div className="project-info">
          <h1>
            Swiggy-like <span className="gradient">Food Ordering</span> Web App
          </h1>
          <p>
            <TbPoint /> Used Swiggy's real-time API to fetch restaurant data.
          </p>
          <p>
            <TbPoint /> Performance optimization: infinite scrolling,
            searching, code-splitting.
          </p>
          <p>
            <TbPoint /> Front-end: ReactJS, HTML, CSS, React Router.
          </p>
          <p>
            <TbPoint /> State management: Redux Toolkit for building Cart.
          </p>
          <a href="https://swiggy-vite-react.netlify.app/" target="_blank" rel="noreferrer">
            <button>
              <FaExternalLinkAlt /> Website
            </button>
          </a>
        </div>
      </div>

      {/* NetflixGPT Project */}
      <div className="project-card block">
        <div className="project-vid">
          <video
            ref={video02}
            muted
            loop
            onMouseEnter={() => handleVideoPlay(video02)}
            onMouseLeave={() => handleVideoPause(video02)}
            src={netflix}
          ></video>
        </div>
        <div className="project-info">
          <h1>
            NetflixGPT <span className="gradient">Movie Suggestion</span> Web App
          </h1>
          <p>
            <TbPoint /> Used Google's AI model Gemini for movie suggestions.
          </p>
          <p>
            <TbPoint /> Used Firebase for user sign-in/sign-up authentication.
          </p>
          <p>
            <TbPoint /> Performance optimization: design inspired by Netflix,
            responsive across all devices.
          </p>
          <p>
            <TbPoint /> Front-end: ReactJS, HTML, CSS, Redux Toolkit, React Router.
          </p>
          <a href="https://net-flix-gpt-ibrahim.netlify.app/" target="_blank" rel="noreferrer">
            <button>
              <FaExternalLinkAlt /> Website
            </button>
          </a>
        </div>
      </div>

      {/* YouTube Clone Project */}
      <div className="project-card block">
        <div className="project-vid">
          <video
            ref={video03}
            muted
            loop
            onMouseEnter={() => handleVideoPlay(video03)}
            onMouseLeave={() => handleVideoPause(video03)}
            src={youtube}
          ></video>
        </div>
        <div className="project-info">
          <h1>
            YouTube <span className="gradient">Clone</span> Web App
          </h1>
          <p>
            <TbPoint /> Used YouTube's real-time API to fetch videos.
          </p>
          <p>
            <TbPoint /> Performance optimization: search using debouncing,
            search data caching, suggestions like YouTube, dynamic pages.
          </p>
          <p>
            <TbPoint /> Front-end: ReactJS, HTML, CSS, Redux Toolkit, React Router.
          </p>
          <a href="https://youtube-ver-1.netlify.app/" target="_blank" rel="noreferrer">
            <button>
              <FaExternalLinkAlt /> Website
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
