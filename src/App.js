import React from "react";
import "./App.css";
import "./Weather.css";

import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather city="Atlanta" />
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
