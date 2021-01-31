import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";
import "./Forecast.css";
import "./App.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.city);

  function displayTemperature(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      icon: response.data.weather[0].icon,
      city: response.data.name,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      hi: response.data.main.temp_max,
      lo: response.data.main.temp_min,
      date: new Date(response.data.dt * 1000),
    });
  }

  function search() {
    let apiKey = "037d9b04c685370b3f28aaa4b1482345";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(displayTemperature);
  }
  function handleSearch(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSearch}>
          <div className="row">
            <div className="col-12 col-sm-9 mb-3 mb-md-0">
              <input
                type="search"
                className="form-control"
                placeholder="Enter City"
                autoFocus="on"
                autoComplete="off"
                id="city-input-value"
                onChange={updateCity}
              />
            </div>
            <div className="col-2">
              <input type="submit" className="btn btn-info" value="Search" />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <Forecast city={weatherData.city} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
