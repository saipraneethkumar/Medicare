import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
          With a focus on patient well-being, we offer personalized care, advanced treatments, and convenient online access to trusted professionals. Your health is our priority—because you deserve the best in medical care.
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/vector1.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
