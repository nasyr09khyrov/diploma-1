import { NavLink } from "react-router-dom";
import "./Footer.css"

export default function Footer() {
  return (
    <div className="Footer">
      <div className="container">
        <div className=""footer-content>
          <div className=""footer-section>
            <h3 className="footer-title">About Us</h3>
            <p className="footer-description">
            You will need ski equipment to hit the slopes, such as ski boots, bindings, skis, and ski poles. Don't worry, you can find everything you need on our website for ski equipment!
            </p>
          </div>
        </div>
      </div>
      <div className="Footer__bottom">
        <p>© 2023 YourOnlineStore. All rights reserved.</p>
      </div>
    </div>
  );
}