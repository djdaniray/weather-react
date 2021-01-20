import React from "react";
import "./App.css";
import "./Weather.css";
import "./Forecast.css";

import Weather from "./Weather";

import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <div className="card-body">
            <Weather city="Atlanta" />
            <div className="col-12">
              <Forecast />
            </div>
          </div>
        </div>

        <br />
        <footer>
          <a
            href="https://github.com/djdaniray/weather-react"
            rel="noreferrer "
            target="_blank"
          >
            Open-sourced code {""}
          </a>
          by Danielle Stukes
        </footer>
      </div>
    </div>
  );
}
