import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h1 className="logo-text">Ecommerce</h1>
          <span>
            This E-Commerce Website is <br></br>{" "}
            to process the final validation of my certificate.
          </span>
          <div className="contact">
            <span>
              <i className="fa fa-phone fa1" ></i> &nbsp; (+216) 20-366-839
            </span>
            <span>
              <i className="fa fa-envelope fa1"></i> &nbsp; info@Ecommerce.com
            </span>
            <div className="socials">
              <a href="https://www.facebook.com/scoolboy1/">
                <i className="fa fa-facebook fa1"></i>
              </a>
              <a href="https://www.facebook.com/scoolboy1/">
                <i className="fa fa-instagram fa1"></i>
              </a>
              <a href="https://www.facebook.com/scoolboy1/">
                <i className="fa fa-twitter fa1"></i>
              </a>
              <a href="https://www.facebook.com/scoolboy1/">
                <i className="fa fa-google fa1"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; Designed in 2020 for Final Project Validation
      </div>
    </div>
  );
}

export default Footer;
