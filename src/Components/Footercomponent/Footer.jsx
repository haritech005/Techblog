import React from 'react';
import { PiInstagramLogoFill } from "react-icons/pi";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import { TbBrandTwitterFilled } from "react-icons/tb";
import { TbBrandFacebookFilled } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-about">
        <h3 className="footer-title">About Dev Diaries</h3>
        <p className="footer-description">
          Dev Diaries is a platform dedicated to sharing insights, tips, and resources for aspiring developers and tech enthusiasts. Our mission is to empower learners at all levels by providing valuable content that fosters growth and innovation in the tech community.
        </p>
      </div>

      <div className="footer-links">
        <h4 className="footer-subtitle">Quick Links</h4>
        <ul className="footer-link-list">
          <li><a href="/">Home</a></li>
          <li><a href="/categories">Categories</a></li>
          <li><a href="/resources">Resources</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>

      <div className="footer-contact">
        <h4 className="footer-subtitle">Contact</h4>
        <ul className="footer-contact-list">
          <li>Email: j.hariharan005@gmail.com</li>
          <li>Location: Chennai</li>
          <li>Contact: +91 9874567839</li>
        </ul>
      </div>

      <div className="footer-social">
        <ul className="footer-social-icons">
          <li><a href=""><PiInstagramLogoFill /></a></li>
          <li><a href=""><TbBrandYoutubeFilled /></a></li>
          <li><a href=""><TbBrandTwitterFilled /></a></li>
          <li><a href=""><TbBrandFacebookFilled /></a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
