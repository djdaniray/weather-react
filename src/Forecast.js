import React from "react";

export default function Forecast() {
  return (
    <div className="Forecast row" id="forecast">
      <h2 className="col-12">Forecast</h2>
      <div className="col-2">
        <h5>10:00</h5>
        <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="" />
        <div className="high-temp">
          <strong>40° </strong>38°
        </div>
      </div>
      <div className="col-2">
        <h5>13:00</h5>
        <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="" />
        <div className="high-temp">
          <strong>40° </strong>38°
        </div>
      </div>
      <div className="col-2">
        <h5>16:00</h5>
        <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="" />
        <div className="high-temp">
          <strong>40° </strong>38°
        </div>
      </div>
      <div className="col-2">
        <h5>19:00</h5>
        <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="" />
        <div className="high-temp">
          <strong>40° </strong>38°
        </div>
      </div>
      <div className="col-2">
        <h5>22:00</h5>
        <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="" />
        <div className="high-temp">
          <strong>40° </strong>38°
        </div>
      </div>
      <div className="col-2">
        <h5>01:00</h5>
        <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="" />
        <div className="high-temp">
          <strong>40° </strong>38°
        </div>
      </div>
    </div>
  );
}
