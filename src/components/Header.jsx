import React, { useState } from "react";
import m from "../assets/images/M.png";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header data-aos="fade-down" data-aos-duration="800">
      <div className="header-left">
        <a href="#" className="flex" style={{ gap: "0" }}>
          <img src={m} alt="" data-aos="fade-down" data-aos-duration="1500" />
          <h1
            style={{ cursor: "pointer" }}
            data-aos="fade-down"
            data-aos-duration="1700"
          >
            <span style={{ color: "#72a1de" }}>Ibrahi</span>m
          </h1>
        </a>
      </div>
      <ul
        className="header-middle"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <a>
          <li data-aos="fade-down" data-aos-duration="2000">
            About
          </li>
        </a>
        <a href="#skills">
          <li data-aos="fade-down" data-aos-duration="2300">
            Skills
          </li>
        </a>
        <a href="#projects">
          <li data-aos="fade-down" data-aos-duration="2600">
            Projects
          </li>
        </a>
      </ul>
      <ul className="header-right">
        <Link
          to={"https://www.instagram.com/ibrahim__makashi__/"}
          target="blank"
        >
          <li data-aos="fade-down" data-aos-duration="2800">
            <FaInstagram />
          </li>
        </Link>
        <Link to={"https://github.com/ibrahimMakashi"} target="blank">
          <li data-aos="fade-down" data-aos-duration="2900">
            <FaGithub />
          </li>
        </Link>

        <Link to={'https://www.linkedin.com/in/mahammadibrahim-makashi-116b84259'} target="blank">
          <li data-aos="fade-down" data-aos-duration="3000">
            <CiLinkedin />
          </li>
        </Link>
      </ul>
      <div onClick={handleMenu} className="menu-icon">
        <IoMenu />
      </div>
      {
        <div className="side-bar" style={{ right: openMenu ? "0" : "-100%" }}>
          <IoMdClose
            data-aos="fade-down"
            data-aos-duration="500"
            className="close-btn"
            onClick={() => setOpenMenu(false)}
          />
          <ul>
            <a href="#">
              <li data-aos="fade-down" data-aos-duration="800">
                About
              </li>
            </a>
            <a href="#skills">
              <li data-aos="fade-down" data-aos-duration="1000">
                Skills
              </li>
            </a>
            <a href="#projects">
              <li data-aos="fade-down" data-aos-duration="1200">
                Projects
              </li>
            </a>
          </ul>
          <ul className="side-barbottom">
            <Link
              to={"https://www.instagram.com/ibrahim__makashi__/"}
              target="blank"
            >
              <li data-aos="fade-down" data-aos-duration="1400">
                <FaInstagram />
              </li>
            </Link>
            <Link to={"https://github.com/ibrahimMakashi"} target="blank">
              <li data-aos="fade-down" data-aos-duration="1600">
                <FaGithub />
              </li>
            </Link>

            <Link to={'https://www.linkedin.com/in/mahammadibrahim-makashi-116b84259'} target="blank">
              <li data-aos="fade-down" data-aos-duration="1800">
                <CiLinkedin />
              </li>
            </Link>
          </ul>
        </div>
      }
    </header>
  );
};

export default Header;
