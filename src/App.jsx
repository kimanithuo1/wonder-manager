import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Destinations from './pages/Destinations';
import Contact from './pages/Contact';
import TripPlanner from './pages/TripPlanner';
import Footer from './pages/Footer';
import Testimonials from './pages/Testimonials';

function App() {
  return (
    <Router>
      <div className="App bg-[#322505] text-white min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/trip-planner" element={<TripPlanner />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/footer" element={<Footer />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
