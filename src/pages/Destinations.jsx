import React, { useEffect, useState } from 'react';
import { fetchTrendingDestinations } from '../api/travelAPI';

function Destinations() {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTrendingDestinations()
      .then((data) => {
        setDestinations(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching destinations:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="destinations-page bg-[#F3E8CA] text-[#322505] py-8 px-4">
      <h1 className="text-3xl font-bold mb-4 text-[#FA802F]">Top Destinations</h1>
      {loading ? (
        <p>Loading destinations...</p>
      ) : (
        <ul className="list-disc list-inside">
          {destinations.map((destination) => (
            <li key={destination.id} className="mb-2">{destination.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Destinations;
