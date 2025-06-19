import React from 'react';

const Forecast = ({ data }) => {
  const daily = data.list.filter((_, index) => index % 8 === 0);
  return (
    <div className="forecast">
      {daily.map((item, index) => (
        <div className="forecast-day" key={index}>
          <p>{new Date(item.dt_txt).toLocaleDateString()}</p>
          <p>{Math.round(item.main.temp)}°C</p>
          <p>{item.weather[0].main}</p>
        </div>
      ))}
    </div>
  );
};

export default Forecast;
