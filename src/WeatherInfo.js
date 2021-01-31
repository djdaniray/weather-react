import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";
import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-12">
          <h1>{props.data.city} Weather </h1>
        </div>

        <div className="col-10 col-sm-9">
          <div className="clearfix">
            <div className="float-right">
              <h3 className="display">
                <div className="float-left">
                  <WeatherIcon code={props.data.icon} />
                </div>
                <div className="float-left">
                  <Temperature
                    fahrenheit={Math.round(props.data.temperature)}
                  />
                </div>{" "}
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
              <span>{props.data.description}</span>
            </li>
            <li>
              <span>
                Hi {Math.round(props.data.hi)}°F | Lo{" "}
                {Math.round(props.data.lo)}
                °F
              </span>
            </li>
            <li>
              Humidity: <span> {props.data.humidity}</span>%
            </li>
            <li>
              Wind: <span> {Math.round(props.data.wind)}</span>{" "}
              <span className="text-lowercase"> mph</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
