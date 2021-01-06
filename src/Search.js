import React from "react";
import "./Search.css";

export default function Search() {
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
