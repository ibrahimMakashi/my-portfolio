import React, { useRef } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import swiggy from "../assets/videos/swiggy.mp4";
import netflix from "../assets/videos/NetflixGPT.mp4";
import youtube from "../assets/videos/youtube.mp4";

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
            Swiggy like <span className="gradient">Food Ordering</span> Web App
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum,
            voluptates!
          </p>
          <a href="https://swiggy-vite-react.netlify.app/" target="blank">
            <button>
              <FaExternalLinkAlt /> Website
            </button>
          </a>
        </div>
      </div>
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
            NetflixGPT <span className="gradient">Movies Suggetion</span> Web
            App
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum,
            voluptates!
          </p>
          <a href="https://net-flix-gpt-ibrahim.netlify.app/" target="blank">
            <button>
              <FaExternalLinkAlt /> Website
            </button>
          </a>
        </div>
      </div>
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
            Youtube <span className="gradient">clone</span> Web App
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum,
            voluptates!
          </p>
          <a href="https://youtube-ver-1.netlify.app/" target="blank">
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
