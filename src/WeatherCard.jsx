import React from 'react';

const WeatherCard = ({ data }) => {
  return (
    <div className="weather-card">
      <h2>{data.name}</h2>
      <p>{data.weather[0].description}</p>
      <h3>{Math.round(data.main.temp)}°C</h3>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Wind: {data.wind.speed} m/s</p>
    </div>
  );
};

export default WeatherCard;
