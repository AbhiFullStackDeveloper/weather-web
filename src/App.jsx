import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import Forecast from './components/Forecast';
import { fetchWeather } from './api';
import './styles/main.css';
function App() {

  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
 
      const handleSearch = async (city) => {
    try {
      const { current, forecast } = await fetchWeather(city);
      setWeather(current);
      setForecast(forecast);
    } catch (error) {
      alert("City not found");
    }
  };
 
  return (
    <div className="app-conatiner">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

       <h1>🌤️ Weather Dashboard</h1>
      <SearchBar onSearch={handleSearch} />
      {weather && <WeatherCard data={weather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}

export default App;
