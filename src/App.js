import React from "react";
import "./App.css";
import "./Search.css";
import "./Temperature.css";
import "./Date.css";
import "./WeatherDetails.css";
import "./Forecast.css";

import Search from "./Search";
import Temperature from "./Temperature";
import Date from "./Date";
import WeatherDetails from "./WeatherDetails";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-12">
                <h1>Currently Atlanta</h1>
              </div>
              <div className="col-6">
                <Search />
              </div>
              <div className="col-6">
                <Temperature city="Atlanta" />
              </div>
              <div className="col-6">
                <Date />
              </div>
              <div className="col-6">
                <WeatherDetails />
              </div>
              <div className="col-12">
                <Forecast />
              </div>
            </div>
          </div>
        </div>

        <br />
        <h5>
          <a
            href="https://github.com/djdaniray/weather-react"
            rel="noreferrer "
            target="_blank"
          >
            Open-sourced code {""}
          </a>
          by Danielle Stukes
        </h5>
      </div>
    </div>
  );
}
