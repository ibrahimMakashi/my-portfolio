import { useState } from "react";
import reactLogo from "./assets/react.svg";

import "./App.css";
import galaxy from "./assets/videos/galaxy.mp4";
import Header from "./components/Header";
import blackHole from "./assets/videos/blackhole.mp4";
import Hero from "./components/Hero";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="container">
      <ToastContainer position="top-right" autoClose={3000} />
      <video
        className="back-video"
        loop
        autoPlay
        muted
        playsInline
        src={galaxy}
      ></video>
      <Header />
      <div
        className="blackhole-box"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0"
        data-aos-duration="1000"
      >
        <video src={blackHole} loop autoPlay muted playsInline></video>
      </div>

      <spline-viewer
        className="robot"
        url="https://prod.spline.design/HhAfihc09ja1TdU8/scene.splinecode"
      ></spline-viewer>

      <Hero />
      <Project />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
