import "./Footer.css"

export default function Footer() {
  return (
    <div className="Footer">
      <div className="Footer__content">
        <div className="Footer__column">
          <h3 className="Footer__column-header">About Us</h3>
          <ul className="Footer__column-list">
            <li><a href="#">Our Story</a></li>
            <li><a href="#">Our Team</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div className="Footer__column">
          <h3 className="Footer__column-header">For Customers</h3>
          <ul className="Footer__column-list">
            <li><a href="#">Shipping &amp; Delivery</a></li>
            <li><a href="#">Returns &amp; Exchanges</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
  );
}