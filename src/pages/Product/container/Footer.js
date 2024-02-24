import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./Footer.css"; // Import a CSS file for styling (create Footer.css in the same directory)

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="icon-container">
        <a href="https://github.com/Jagadeeshgouda">
          <FaLinkedin size={30} />
        </a>
        <a href="https://github.com/Jagadeeshgouda">
          <FaGithub size={30} />
        </a>
        <a href="https://portfolio-1amv.vercel.app/">
          <p  size={30}>Jagadeeshgouda Y R</p>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
