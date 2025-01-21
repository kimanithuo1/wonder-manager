import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Testimonials from './Testimonials'; // Importing Testimonials component

const Home = () => {
    const [location, setLocation] = useState("Fetching...");
    const [weather, setWeather] = useState(null);
  
    // Fetch location and weather automatically
    useEffect(() => {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setLocation(`Lat: ${latitude.toFixed(2)}, Lon: ${longitude.toFixed(2)}`);
        // Mock weather data
        setWeather("Sunny 25°C");
      });
    }, []);
  
    return (
      <div className="home-container">
        {/* Weather Section */}
        <div className="weather-section">
          {weather ? (
            <>
              <span>{weather}</span> <br />
              <span>{location}</span>
            </>
          ) : (
            <span>Loading weather...</span>
          )}
        </div>

      <header className="text-center max-w-2xl mx-auto mb-10">
        <h1 className="text-4xl font-bold text-[#FA802F]">Nairobi Travel Made Simple</h1>
        <p className="mt-4 text-lg">
          Experience seamless travel planning with expert guidance and a stress-free booking
          experience.
        </p>
        <div className="mt-6">
        <Link
          to="/destinations"
          className="btn btn-primary"
        >
          Explore Now
        </Link>
        <Link
          to="/contact"
          className="btn btn-secondary"
        >
          Get in Touch
        
        </Link>
      </div>
      </header>

      {/* Features Section */}
      <section className="features container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Explore Nairobi with Ease</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-xl font-bold mb-2">Personalized Itinerary Creation</h3>
            <p>
              Our experts help you create personalized travel plans tailored to your interests.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Seamless Booking Services</h3>
            <p>Book hotels, tours, and more with our user-friendly platform.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Expert Travel Consultation</h3>
            <p>Get advice from travel professionals to make your trip unforgettable.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials /> {/* Integrating the Testimonials component */}

      <div className="text-center mt-12">
        <Link
          to="/trip-planner"
           className="btn btn-secondary"
        >
          Plan Your Trip
        </Link>
      </div>
    </div>
  );
}

export default Home;
