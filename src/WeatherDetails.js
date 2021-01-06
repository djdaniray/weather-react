import React from "react";

export default function WeatherDetails() {
  return (
    <div className="WeatherDetails">
      <ul>
        <li>
          <span id="descrip">thunder storms</span>
        </li>
        <li>
          <span id="im-hi-lo">Hi 44°F | Lo 39°F</span>
        </li>
        <li>
          Humidity: <span id="humid"> 80</span>%
        </li>
        <li>
          Wind: <span id="wind"> 7</span>
        </li>
      </ul>
    </div>
  );
}
