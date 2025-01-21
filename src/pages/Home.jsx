import React from 'react';

function Home() {
  return (
    <div className="home-page bg-[#F3E8CA] text-[#322505] py-8 px-4">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-[#FA802F]">Welcome to Travel Planner</h1>
        <p className="text-lg mb-6">
          Plan your perfect trip with ease! Explore destinations, create itineraries, and access exclusive deals.
        </p>
        <button className="bg-[#FA802F] text-white px-6 py-3 rounded hover:bg-[#9C8B73]">
          Get Started
        </button>
      </div>

      <section className="features mt-10">
        <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Personalized travel recommendations</li>
          <li>Detailed guides for top destinations</li>
          <li>Seamless itinerary management</li>
          <li>Exclusive deals and discounts</li>
        </ul>
      </section>
    </div>
  );
}

export default Home;
