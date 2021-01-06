import React from "react";

export default function Temperature() {
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
            <span id="temp">37°</span>
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
