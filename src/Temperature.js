import React, { useState } from "react";

export default function Temperature(props) {
  const [unit, setUnit] = useState("fahrenheit");

  function convertToCelscius(event) {
    event.preventDefault();
    setUnit("celscius");
  }

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  if (unit === "fahrenheit") {
    return (
      <div className="Temperature">
        <span>{Math.round(props.fahrenheit)}</span>
        <span className="hi-lo ml-2">
          <span className="active">°F</span> |
          <a href="/ " onClick={convertToCelscius}>
            °C
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="Temperature">
        <span>{Math.round((props.fahrenheit - 32) * (5 / 9))}</span>
        <span className="hi-lo ml-2">
          <a href=" /" onClick={convertToFahrenheit}>
            °F
          </a>{" "}
          |<span className="active">°C</span>
        </span>
      </div>
    );
  }
}
