import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.example.com', // Replace with the actual API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Fetch trending destinations
export const fetchTrendingDestinations = async () => {
  try {
    const response = await apiClient.get('/trending-destinations'); // Replace with the correct endpoint
    return response.data;
  } catch (error) {
    console.error('Error fetching trending destinations:', error);
    throw error;
  }
};
