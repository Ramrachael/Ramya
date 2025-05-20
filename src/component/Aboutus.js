import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaUserMd, FaClock } from 'react-icons/fa';


function AboutUs() {
  return (
    <div className="about-container">
      <h1 className="about-heading">About Us</h1>
      <div className="about-card">
        <h2 className="clinic-name">MEDSTAR MEDICAL CLINIC & SURGERY</h2>
        <p><FaMapMarkerAlt className="icon" /> <span className="label">Address:</span> 44 Racecourse Road, Singapore-218558</p>
        <p><FaPhoneAlt className="icon" /> <span className="label">Contact:</span> +65 6530 3649</p>
        <p><FaEnvelope className="icon" /> <span className="label">Email:</span> <a href="mailto:medstarmedical176@gmail.com">medstarmedical176@gmail.com</a></p>
        <p><FaUserMd className="icon" /> <span className="label">Doctor:</span> Dr. Viknesh Shanmugam</p>

        <h3 className="clinic-hours-title"><FaClock className="icon" /> Clinic Hours</h3>
        <ul className="clinic-hours-list">
          <li><strong>Mon - Wed, Fri:</strong> 9:30 AM – 1:00 PM, 4:00 PM – 9:00 PM</li>
          <li><strong>Thursday:</strong> Closed</li>
          <li><strong>Saturday:</strong> 4:00 PM – 9:00 PM</li>
          <li><strong>Sunday & Public Holidays:</strong> 9:00 AM – 2:00 PM</li>
        </ul>
      </div>
    </div>
  );
}

export default AboutUs;
