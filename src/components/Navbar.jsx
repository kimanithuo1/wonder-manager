import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-[#322505] text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <Link to="/" className="hover:text-[#FA802F]">Travel Planner</Link>
        </h1>
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:text-[#FA802F]">Home</Link></li>
          <li><Link to="/about" className="hover:text-[#FA802F]">About</Link></li>
          <li><Link to="/destinations" className="hover:text-[#FA802F]">Destinations</Link></li>
          <li><Link to="/contact" className="hover:text-[#FA802F]">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
