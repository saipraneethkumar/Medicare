import React from "react";
import { Link } from "react-router-dom";
import { FaLocationArrow, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "../css/Footer.css"; // Import the new CSS for Footer

const Footer = () => {
  const hours = [
    {
      id: 1,
      day: "Monday",
      time: "9:00 AM - 11:00 PM",
    },
    {
      id: 2,
      day: "Tuesday",
      time: "12:00 PM - 12:00 AM",
    },
    {
      id: 3,
      day: "Wednesday",
      time: "10:00 AM - 10:00 PM",
    },
    {
      id: 4,
      day: "Thursday",
      time: "9:00 AM - 9:00 PM",
    },
    {
      id: 5,
      day: "Friday",
      time: "3:00 PM - 9:00 PM",
    },
    {
      id: 6,
      day: "Saturday",
      time: "9:00 AM - 3:00 PM",
    },
  ];

  return (
    <>
      <footer className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="/logo-invert.png" alt="logo" className="logo-img" />
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/appointment">Appointment</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
          <div className="footer-hours">
            <h4>Hours</h4>
            <ul>
              {hours.map((element) => (
                <li key={element.id}> 
                  <span>{element.day}:</span>
                  <span>{element.time}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-contact">
            <h4>Contact</h4>
            <div className="contact-item">
              <FaPhone />
              <span>123-456-12345</span>
            </div>
            <div className="contact-item">
              <MdEmail />
              <span>medicare@support.com</span>
            </div>
            <div className="contact-item">
              <FaLocationArrow />
              <span>Ontario, Canada</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Medicare Hospital. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
