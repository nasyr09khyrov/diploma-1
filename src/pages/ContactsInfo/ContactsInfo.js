import "./ContactsInfo.css";

export default function ContactsInfo() {
  return (
    <div className="Contacts">
      <h2>Contact Us</h2>
      <p>Our contact phone number, everything is listed below!</p>
      <ul>
        <li>Email: info@skiStore.com</li>
        <li>Phone: 123-456-7890</li>
        <li>Address: 123 Main Street, City, Country</li>
      </ul>
    </div>
  );
}