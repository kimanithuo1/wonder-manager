import React, { useEffect, useState } from 'react';
import { fetchDestinations } from '../api/travelAPI';

function About() {
  const [trendingDestinations, setTrendingDestinations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDestinations()
      .then((data) => {
        setTrendingDestinations(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching trending destinations:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="about-page container mx-auto px-4 py-8 bg-[#F3E8CA] text-[#322505]">
      <h1 className="text-3xl font-bold mb-4 text-[#FA802F]">About Us</h1>
      <p className="mb-6">
        Welcome to Travel Planner, your go-to platform for organizing your dream trips. Whether you're
        looking for serene beaches, thrilling adventures, or cultural landmarks, we’ve got you covered!
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">What We Do</h2>
        <p>
          Our mission is to make travel planning simple, efficient, and enjoyable. We provide:
        </p>
        <ul className="list-disc list-inside ml-4 mt-2">
          <li>Tailored travel recommendations</li>
          <li>Destination insights with guides</li>
          <li>Real-time booking and itinerary management</li>
          <li>Exclusive travel deals</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Travel Destinations We Recommend</h2>
        <p>
          Whether you’re after adventure, relaxation, or cultural experiences, here are some of our top picks:
        </p>
        <ul className="list-disc list-inside ml-4 mt-2">
          <li>Masai Mara, Kenya – Unmatched wildlife safaris</li>
          <li>Paris, France – The city of love and iconic landmarks</li>
          <li>Bali, Indonesia – A tropical paradise</li>
          <li>Kyoto, Japan – A journey into Japan’s rich culture</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Hot Destinations Around the World</h2>
        {loading ? (
          <p>Loading hot destinations...</p>
        ) : (
          <ul className="list-disc list-inside ml-4 mt-2">
            {trendingDestinations.map((destination) => (
              <li key={destination.id} className="text-[#9C8B73]">{destination.name}</li>
            ))}
            {/* Adding more hot destinations */}
            <li className="text-[#9C8B73]">New York City, USA – The city that never sleeps</li>
            <li className="text-[#9C8B73]">Rome, Italy – A journey through history</li>
            <li className="text-[#9C8B73]">Sydney, Australia – Iconic landmarks and beaches</li>
            <li className="text-[#9C8B73]">Cape Town, South Africa – Stunning landscapes and culture</li>
          </ul>
        )}
      </section>
    </div>
  );
}

export default About;
