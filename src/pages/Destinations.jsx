import React, { useState, useEffect } from 'react';
import BackToTopButton from '../components/BackToTopButton';

function Destinations() {
  const [destinations, setDestinations] = useState([]);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const fetchDestinations = async (query = 'travel') => {
    try {
      const response = await fetch(`https://api.pexels.com/v1/search?query=${query}`, {
        headers: {
          Authorization: 'IsCZQWTj8BZ5LNjDVnFJD3ZvhyK3Ukx5reYA4xX8kTEIZG3x8TOotDnY',
        },
      });
      const data = await response.json();
      setDestinations(data.photos);
    } catch (error) {
      console.error('Error fetching destinations:', error);
    }
  };

  useEffect(() => {
    fetchDestinations();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchDestinations(search);
    setCurrentPage(1); // Reset pagination to page 1
  };

  const handlePageChange = (direction) => {
    if (direction === 'next') {
      setCurrentPage((prev) => prev + 1);
    } else {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedItems = destinations.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="destinations-page bg-[#F3E8CA] text-[#322505] py-8 px-4">
      <h1 className="text-4xl font-bold text-center mb-6">Discover Destinations</h1>
      <form onSubmit={handleSearch} className="mb-6 text-center">
        <input
          type="text"
          placeholder="Search destinations..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 border rounded w-3/4"
        />
        <button type="submit" className="bg-[#FA802F] text-white px-4 py-2 rounded ml-2">
          Search
        </button>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {displayedItems.map((photo) => (
          <div
            key={photo.id}
            className="movie-card text-white flex flex-col bg-[#2e2e48] p-4 rounded shadow-lg"
          >
            <img
              src={photo.src.medium}
              alt={photo.alt}
              className="rounded object-cover w-full h-48"
            />
            <div className="details mt-4">
              <h3 className="text-xl font-bold text-[#f4d03f]">{photo.alt}</h3>
              <p className="text-[#d3d3d3] mt-2">
                Explore this breathtaking destination perfect for adventure and relaxation.
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination mt-6 flex justify-center items-center gap-4">
        <button
          onClick={() => handlePageChange('prev')}
          disabled={currentPage === 1}
          className="bg-[#FA802F] text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-lg font-bold">{currentPage}</span>
        <button
          onClick={() => handlePageChange('next')}
          disabled={startIndex + itemsPerPage >= destinations.length}
          className="bg-[#FA802F] text-white px-4 py-2 rounded"
        >
          Next
        </button>
      </div>
      <BackToTopButton />
    </div>
  );
}

export default Destinations;
