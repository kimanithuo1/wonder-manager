import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://www.pexels.com/api/IsCZQWTj8BZ5LNjDVnFJD3ZvhyK3Ukx5reYA4xX8kTEIZG3x8TOotDnY/', // Replace with your API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchDestinations = async () => {
  try {
    const response = await apiClient.get('/destinations'); // Replace with your endpoint
    return response.data;
  } catch (error) {
    console.error('Error fetching destinations:', error);
    throw error;
  }
};
