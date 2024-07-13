import React from "react";
import "./Footer.css";
import Facebook from "../Images/Facebook.png";
import Instagram from "../Images/Instagram.png";
import Github from "../Images/Github.png";
import Youtube from "../Images/Youtube.png";
import LinkedIn from "../Images/LinkedIn.png";

function Footer() {
  return (
    <div className="footer">
      <p>Follow us on</p>
      <div className="icons">
        <a href="https://www.facebook.com/">
          <img src={Facebook} alt="Facebook" />
        </a>
        <a href="https://www.instagram.com/">
          <img src={Instagram} alt="Instagram" />
        </a>
        <a href="https://github.com/">
          <img src={Github} alt="Github" />
        </a>
        <a href="https://www.youtube.com/">
          <img src={Youtube} alt="Youtube" />
        </a>
        <a href="https://www.linkedin.com/">
          <img src={LinkedIn} alt="LinkedIn" />
        </a>
      </div>
      <div>
        <ul className="links">
          <li>
            <a href="#"> Home </a>
          </li>
          <li>
            <a href="#"> About us </a>
          </li>
          <li>
            <a href="#"> Contact us </a>
          </li>
          <li>
            <a href="#"> Our Team </a>
          </li>
        </ul>
      </div>
      <div className="copyright">
        <p>copyright © 2024 Manuja Sandeep. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
