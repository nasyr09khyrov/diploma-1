import React from "react";
import "./Footer.css"

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">About Us</h3>
            <p className="footer-description">
            You will need ski equipment to hit the slopes, such as ski boots, bindings, skis, and ski poles. Don't worry, you can find everything 
            you need on our website for ski equipment!
            </p>
          </div> 
          <div className="footer-section"> 
            <h3 className="footer-title">Contact Us</h3> 
            <ul className="footer-contact-list"> 
              <li className="footer-contact-item">Phone: +996 700-549-530</li> 
              <li className="footer-contact-item">Email: hyrovn@gmail.com</li> 
              <li className="footer-contact-item">Address: 11, Zhambulskaya, Karakol City</li> 
            </ul> 
          </div>
          <div className="footer-section"> 
            <h3 className="footer-title">Follow Us</h3> 
            <ul className="footer-social-list"> 
              <li className="footer-social-item"> 
                <a href="https://www.facebook.com/profile.php?id=100092558540976" target="_blank" rel="noopener noreferrer"> 
                  <i className="fab fa-facebook"></i> 
                </a> 
              </li> 
              <li className="footer-social-item"> 
                <a href="https://www.instagram.com/n.02khyrov" target="_blank" rel="noopener noreferrer"> 
                  <i className="fab fa-instagram"></i> 
                </a> 
              </li> 
              <li className="footer-social-item"> 
                <a href="https://twitter.com/hyrovn" target="_blank" rel="noopener noreferrer"> 
                  <i className="fab fa-twitter"></i> 
                </a> 
              </li> 
            </ul> 
          </div>  
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2023 YourOnlineStore. All rights reserved.</p>
      </div>
    </div>
  );
}