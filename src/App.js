import logo from "./logo.svg";
import "./App.css";

import "./Search.css";
import "./Temperature.css";
import "./Date.css";
import "./WeatherDetails.css";
import "./Forecast.css";

import Search from "./Search";
import Temperature from "./Temperature";
import Date from "./Date";
import WeatherDetails from "./WeatherDetails";
import Forecast from "./Forecast";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-12">
                <h1>Currently Atlanta</h1>
              </div>
              <div className="col-6">
                <Search />
              </div>
              <div className="col-6">
                <Temperature />
              </div>
              <div className="col-6">
                <Date />
              </div>
              <div className="col-6">
                <WeatherDetails />
              </div>
              <div className="col-12">
                <Forecast />
              </div>
            </div>
          </div>
        </div>
      </div>

      <h5>
        <a
          href="https://github.com/djdaniray/Weather-app-DS"
          rel="noreferrer "
          target="_blank"
        >
          Open-source code {""}
        </a>
        by Danielle Stukes
      </h5>
    </div>
  );
}

export default App;
