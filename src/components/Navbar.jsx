import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-[#322505] text-white">
      <h1 className="text-2xl font-bold">Wondering Traveller</h1>
      <div className="space-x-6">
        <Link to="/" className="hover:text-[#FA802F]">Home</Link>
        <Link to="/about" className="hover:text-[#FA802F]">About</Link>
        <Link to="/destinations" className="hover:text-[#FA802F]">Destinations</Link>
        <Link to="/contact" className="hover:text-[#FA802F]">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
