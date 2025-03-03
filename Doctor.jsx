import React from "react";
import "../css/Doctors.css"; // Using CSS instead of SCSS

const doctors = [
  {
    name: "Dr. John Doe",
    department: "Cardiology",
    image: "/team-1.jpg",
  },
  {
    name: "Dr. Sarah Smith",
    department: "Neurology",
    image: "/team-2.jpg",
  },
  {
    name: "Dr. William Brown",
    department: "Orthopedics",
    image: "/team-3.jpg",
  },
];

const Doctors = () => {
  return (
    <div className="doctors-container">
      <h2 className="doctors-title">Meet Our Experienced Doctors</h2>
      <div className="doctor-grid">
        {doctors.map((doctor, index) => (
          <div key={index} className="doctor-card">
            <div className="image-wrapper">
              <img src={doctor.image} alt={doctor.name} className="doctor-image" />
              <div className="overlay">
                <a href="#" className="social-icon"><i className="fab fa-facebook"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-linkedin"></i></a>
              </div>
            </div>
            <h3 className="doctor-name">{doctor.name}</h3>
            <p className="doctor-department">{doctor.department}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
