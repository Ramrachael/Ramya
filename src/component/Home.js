// src/component/Home.js
import React from 'react';
import { motion } from 'framer-motion';
import screeningImage from '../assests/med.png'; // update path as needed

function Home() {
  return (
    <div className="health-container">
      <div className="health-image">
        <img src={screeningImage} alt="Health Screening" />
      </div>

      <div className="health-content">
        {/* Heading falls from top */}
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Health Screening
        </motion.h1>

        {/* First paragraph falls from top */}
        <motion.p
          className="highlight"
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Taking charge of your health begins with a comprehensive screening.
        </motion.p>

        {/* Second paragraph slides from right */}
        <motion.p
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Regular health screenings are more than just routine checks—they're a proactive way to detect potential health issues early and take control of your well-being. Make it a part of your lifestyle. Early detection can lead to better outcomes and, in some cases, could even save your life.
        </motion.p>
      </div>
    </div>
  );
}

export default Home;
