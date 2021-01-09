import React, { useState } from "react";
import "./Search.css";
import axios from "axios";
import Temperature from "./Temperature";

export default function Search() {
  const [city, setCity] = useState(null);
  //const [temperature, setTemperature] = useState(null);

  function handleSearch(event) {
    event.preventDefault();
    let apiKey = "037d9b04c685370b3f28aaa4b1482345";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function displayWeather(response) {
    //setTemperature(Math.round(response.data.main.temp));
  }

  return (
    <div className="Search row">
      <form id="search-form" onSubmit={handleSearch}>
        <label> Search Location </label>

        <input
          type="search"
          className="form-control"
          placeholder="Enter City"
          autoFocus="on"
          autoComplete="off"
          id="city-input-value"
          onChange={updateCity}
        />
        <input type="submit" className="btn btn-info" value="Search" />
        <button
          type="button"
          className="btn btn-info current"
          id="current-location"
        >
          Current Location
        </button>
      </form>
    </div>
  );
}
