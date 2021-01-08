import React, { useState } from "react";
import axios from "axios";

export default function Temperature(props) {
  const [temperature, setTemperature] = useState(null);

  function displayTemperature(response) {
    setTemperature(response.data.main.temp);
  }

  let apiKey = "037d9b04c685370b3f28aaa4b1482345";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(displayTemperature);

  return (
    <div className="Temperature">
      <div className="clearfix">
        <div className="float-right">
          <h3 className="display">
            <img
              src="http://openweathermap.org/img/wn/10d@2x.png"
              alt=""
              id="icon"
            />
            <span id="temp">{Math.round(temperature)}</span>
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
  );
}
