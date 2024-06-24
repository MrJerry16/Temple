import React from 'react';
import Navbar from './Components/Navbar';
import Foot from './Components/Foot';
import Main from './Components/Main'; // Import your Main component
import './Components/Main.css'; // Import the CSS file
import Header from './Components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import necessary components from react-router-dom (Switch is removed in v6)
import About from './Components/About';
import Photo from './Components/Photo';
import Service from './Components/Service';

function HinduTemple() {
  return (
    <>
      <Router>
      <Header />
        <Navbar />
        

        {/* Wrap your routes in <Routes> */}
        <Routes>
          <Route exact path="/" element={<Main />} /> {/* Use element prop for React Router v6 */}
          <Route exact path="/about" element={<About />} />
          <Route exact path="/photo" element={<Photo />} />
          <Route exact path="/service" element={<Service/>} />
        </Routes>

      </Router>
      <Foot />
    
    </>
  );
}

export default HinduTemple;
