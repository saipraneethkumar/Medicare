import React from "react";
import "../css/Biography.css"; // Import the CSS file
const Biography = ({ imageUrl }) => {
  return (
    <div className="biography-container">
      <div className="biography-banner">
        <img src={imageUrl} alt="Who We Are" className="biography-image" />
      </div>
      <div className="biography-content">
        <h3 className="biography-title">Who We Are</h3>
        <p>
        Welcome to our medical platform, where compassionate care meets advanced technology. We are dedicated to providing reliable health solutions, ensuring every patient receives the best possible treatment and guidance.
        </p>
        <p>
        Our team of experienced healthcare professionals is committed to enhancing well-being through accurate medical information, modern treatments, and patient-centered care.
        </p>
        <p>
        Whether you're seeking expert medical advice, wellness tips, or convenient online consultations, we are here to support you every step of the way. Your health is our priority.
        </p>
      </div>
    </div>
  );
};

export default Biography;