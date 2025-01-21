import React, { useState } from 'react';

function TripPlanner() {
  const [budget, setBudget] = useState('');
  const [destination, setDestination] = useState('');
  const [itinerary, setItinerary] = useState('');

  const handlePlanTrip = () => {
    alert(`Planning trip to ${destination} with a budget of ${budget}!\nSuggested Itinerary: ${itinerary}`);
  };

  return (
    <div className="trip-planner-page bg-[#F3E8CA] text-[#322505] py-8 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Plan Your Trip</h1>
      <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow">
        <label className="block mb-4">
          Destination:
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="block w-full mt-2 p-2 border rounded"
          />
        </label>
        <label className="block mb-4">
          Budget:
          <input
            type="number"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="block w-full mt-2 p-2 border rounded"
          />
        </label>
        <label className="block mb-4">
          Suggested Itinerary:
          <textarea
            value={itinerary}
            onChange={(e) => setItinerary(e.target.value)}
            className="block w-full mt-2 p-2 border rounded"
            rows="5"
          />
        </label>
        <button
          onClick={handlePlanTrip}
          className="bg-[#FA802F] text-white px-6 py-2 rounded hover:bg-[#9C8B73]"
        >
          Plan Trip
        </button>
      </div>
    </div>
  );
}

export default TripPlanner;
