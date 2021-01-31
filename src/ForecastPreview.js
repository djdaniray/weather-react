import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastPreview(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }

  function temperature() {
    let temperature = Math.round(props.data.main.temp);
    return `${temperature}°F`;
  }
  return (
    <div className="ForecastPreview col-12 col-sm mb-3 mb-md-0">
      <p>{hours()}</p>
      <WeatherIcon code={props.data.weather[0].icon} />
      <p>
        <strong>{temperature()} </strong>
      </p>
    </div>
  );
}
