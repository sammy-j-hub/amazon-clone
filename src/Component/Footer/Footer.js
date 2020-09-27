import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
function Footer() {
  return (
    <Link to="/">
      <div className="footer">
        <img
          className="footer__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
        <div className="footer_bar">
          <span className="footer_bar_career">Careers</span>
          <span className="footer_bar_blog">Blog</span>
          <span className="footer_bar_contact">Contact Us</span>
          <span className="footer_bar_help">Help</span>
        </div>

        <p>Copyright © 2020, Amazon clone by Samriddhi Jaiswal 🚀 </p>
      </div>
    </Link>
  );
}

export default Footer;
