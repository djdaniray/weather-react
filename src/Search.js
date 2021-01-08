import React from "react";
import "./Search.css";

export default function Search() {
  let apiKey = "037d9b04c685370b3f28aaa4b1482345";
  //let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

  return (
    <div className="Search row">
      <form id="search-form">
        <label> Search Location </label>

        <input
          type="search"
          className="form-control"
          placeholder="Enter City"
          autoFocus="on"
          autoComplete="off"
          id="city-input-value"
        />
        <input type="submit" className="btn btn-info" value="Search" />
        <button
          type="button"
          className="btn btn-info current"
          id="current-location"
        >
          Current Location
        </button>
      </form>
    </div>
  );
}
