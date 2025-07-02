import axios from "axios";

const API_KEY = ""; // Replace with your OpenWeatherMap API key

export const fetchWeather = async (city) => {
  const current = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
  const forecast = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`);
  return { current: current.data, forecast: forecast.data };
};
