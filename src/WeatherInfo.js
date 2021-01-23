import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
//import Temperature from ".Temperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-12">
          <h1>{props.data.city} Weather </h1>
        </div>

        <div className="col-9">
          <div className="clearfix">
            <div className="float-right">
              <h3 className="display">
                <div className="float-left">
                  <WeatherIcon code={props.data.icon} />
                </div>
                <span>{Math.round(props.data.temperature)}</span>
                <small className="hi-lo ml-2">
                  <a href=" /" className="active">
                    °F
                  </a>{" "}
                  |<a href="/ ">°C</a>
                </small>
              </h3>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul className="date-time">
            <li>Last updated</li>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
          </ul>
        </div>
        <div className="col-6">
          <ul className="weatherDetails text-capitalize">
            <li>
              <span id="descrip">{props.data.description}</span>
            </li>
            <li>
              <span id="im-hi-lo">
                Hi {Math.round(props.data.hi)}°F | Lo{" "}
                {Math.round(props.data.lo)}
                °F
              </span>
            </li>
            <li>
              Humidity: <span id="humid"> {props.data.humidity}</span>%
            </li>
            <li>
              Wind: <span id="wind"> {Math.round(props.data.wind)}</span>{" "}
              <span className="text-lowercase"> mph</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
