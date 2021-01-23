import React from "react";

export default function Temperature(props) {
  return (
    <div>
      <span id="temp">{Math.round(props.data.temperature)}</span>
      <small className="hi-lo ml-2">
        <a href=" /" className="active" id="imperial">
          °F
        </a>{" "}
        |
        <a href="/ " id="metric">
          °C
        </a>
      </small>
    </div>
  );
}
