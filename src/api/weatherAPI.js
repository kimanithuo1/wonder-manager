import axios from 'axios';

const API_KEY = '82f477582715b92f9a2a1acd0001bff4'; // Replace with your actual API key

export const getCurrentWeather = async (location) => {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`);
        return response.data;
    } catch (error) {
        console.error('Error fetching current weather:', error);
        throw error;
    }
};

export const getWeatherByCoordinates = async (lat, lon) => {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
        return response.data;
    } catch (error) {
        console.error('Error fetching weather by coordinates:', error);
        throw error;
    }
};
