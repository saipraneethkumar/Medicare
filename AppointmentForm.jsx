import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "../css/AppointmentForm.css"; // Custom CSS for styling and animations

const AppointmentForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nic, setNic] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [department, setDepartment] = useState("Pediatrics");
  const [doctorFirstName, setDoctorFirstName] = useState("");
  const [doctorLastName, setDoctorLastName] = useState("");
  const [address, setAddress] = useState("");
  const [hasVisited, setHasVisited] = useState(false);

  const departmentsArray = [
    "Pediatrics",
    "Orthopedics",
    "Cardiology",
    "Neurology",
    "Oncology",
    "Radiology",
    "Physical Therapy",
    "Dermatology",
    "ENT",
  ];

  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const { data } = await axios.get("http://localhost:4000/api/v1/user/doctors", { withCredentials: true });
        setDoctors(data.doctors);
      } catch (error) {
        toast.error("Failed to load doctors");
      }
    };
    fetchDoctors();
  }, []);

  const handleAppointment = async (e) => {
    e.preventDefault();
    try {
      const hasVisitedBool = Boolean(hasVisited);
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/appointment/post",
        {
          firstName,
          lastName,
          email,
          phone,
          nic,
          dob,
          gender,
          appointment_date: appointmentDate,
          department,
          doctor_firstName: doctorFirstName,
          doctor_lastName: doctorLastName,
          hasVisited: hasVisitedBool,
          address,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success(data.message);
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setNic("");
      setDob("");
      setGender("");
      setAppointmentDate("");
      setDepartment("Pediatrics");
      setDoctorFirstName("");
      setDoctorLastName("");
      setHasVisited(false);
      setAddress("");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to book appointment");
    }
  };

  return (
    <div className="appointment-container fadeIn">
      <h2 className="form-title slideUp">Book Your Appointment</h2>
      <form className="appointment-form zoomIn" onSubmit={handleAppointment}>
        <div className="form-group">
          <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
          <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
        </div>
        <div className="form-group">
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="tel" placeholder="Mobile Number" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </div>
        <div className="form-group">
          <input type="text" placeholder="NIC" value={nic} onChange={(e) => setNic(e.target.value)} required />
          <input type="date" placeholder="Date of Birth" value={dob} onChange={(e) => setDob(e.target.value)} required />
        </div>
        <div className="form-group">
          <select value={gender} onChange={(e) => setGender(e.target.value)} required>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <input type="date" placeholder="Appointment Date" value={appointmentDate} onChange={(e) => setAppointmentDate(e.target.value)} required />
        </div>
        <div className="form-group">
          <select value={department} onChange={(e) => { setDepartment(e.target.value); setDoctorFirstName(""); setDoctorLastName(""); }}>
            {departmentsArray.map((depart, index) => (
              <option value={depart} key={index}>{depart}</option>
            ))}
          </select>
          <select value={`${doctorFirstName} ${doctorLastName}`} onChange={(e) => {
            const [firstName, lastName] = e.target.value.split(" ");
            setDoctorFirstName(firstName);
            setDoctorLastName(lastName);
          }} disabled={!department}>
            <option value="">Select Doctor</option>
            {doctors.filter((doctor) => doctor.doctorDepartment === department).map((doctor, index) => (
              <option value={`${doctor.firstName} ${doctor.lastName}`} key={index}>{doctor.firstName} {doctor.lastName}</option>
            ))}
          </select>
        </div>
        <textarea rows="4" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" required />
        <div className="checkbox-group">
          <label>Have you visited before?</label>
          <input type="checkbox" checked={hasVisited} onChange={(e) => setHasVisited(e.target.checked)} />
        </div>
        <button className="submit-btn pulse">Book Appointment</button>
      </form>
    </div>
  );
};

export default AppointmentForm;
