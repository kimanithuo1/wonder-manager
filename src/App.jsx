import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Destinations from './pages/Destinations';

function App() {
  return (
    <Router>
      <div className="App bg-[#322505] text-white min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/destinations" element={<Destinations />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
