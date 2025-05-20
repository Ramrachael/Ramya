import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Navbar from './component/Navbar';
import About from './component/Aboutus';
import Contact from './component/Contact';
import Location from './component/Location';
import Help from './component/Help';
import Home from './component/Home';
// import About from './About';
// import Contact from './Contact';
// import Location from './Location';
// import Help from './Help';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/location" element={<Location />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </Router>
  );
}

export default App;
