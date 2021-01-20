import React, { useState } from "react";
import axios from "axios";
import "./App.css";

import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.city);

  function displayTemperature(response) {
    let icon = response.data.weather[0].icon;
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      iconUrl: `https://openweathermap.org/img/wn/${icon}@2x.png`,
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
        <div className="row">
          <div className="col-12">
            <h1>Currently {weatherData.city} </h1>
          </div>
          <div className="col-6">
            <form onSubmit={handleSearch}>
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
                <i className="fas fa-map-marker-alt"></i>
              </button>
            </form>
          </div>

          <div className="col-6">
            <div className="clearfix">
              <div className="float-right">
                <h3 className="display">
                  <img
                    className="icon"
                    src={weatherData.iconUrl}
                    alt=""
                    id="icon"
                  />
                  <span id="temp">{Math.round(weatherData.temperature)}</span>
                  <small className="hi-lo ml-2">
                    <a href=" " className="active" id="imperial">
                      °F
                    </a>{" "}
                    |
                    <a href=" " id="metric">
                      °C
                    </a>
                  </small>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul className="date-time">
              <li id="current-time">Last updated</li>
              <li>
                <FormattedDate date={weatherData.date} />
              </li>
            </ul>
          </div>
          <div className="col-6">
            <ul className="weatherDetails text-capitalize">
              <li>
                <span id="descrip">{weatherData.description}</span>
              </li>
              <li>
                <span id="im-hi-lo">
                  Hi {Math.round(weatherData.hi)}°F | Lo{" "}
                  {Math.round(weatherData.lo)}
                  °F
                </span>
              </li>
              <li>
                Humidity: <span id="humid"> {weatherData.humidity}</span>%
              </li>
              <li>
                Wind: <span id="wind"> {Math.round(weatherData.wind)}</span>{" "}
                <span className="text-lowercase"> mph</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
