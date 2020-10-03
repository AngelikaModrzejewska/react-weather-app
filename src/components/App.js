import React, { Component } from "react";
import Form from "./Form";
import Result from "./Result";
import "./App.css";

const APIKey = "eba600f6bf92659b60e474abea3b9f3a";

class App extends Component {
  state = {
    value: "",
    date: "",
    city: "",
    sunrise: "",
    sunset: "",
    temp: "",
    pressure: "",
    wind: "",
    err: false,
  };

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleCitySubmit = (e) => {
    e.preventDefault();
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value
      }&APPID=${APIKey}&units=metric`;

    fetch(API)
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error("Fail!");
      })
      .then((response) => response.json())
      .then((data) => {
        const time = new Date().toLocaleString();
        this.setState((state) => ({
          err: false,
          date: time,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          temp: data.main.temp,
          pressure: data.main.pressure,
          wind: data.wind.speed,
          city: state.value,
        }));
      })
      .catch((err) => {
        this.setState((prevState) => ({
          err: true,
          city: prevState.value,
        }));
      });
  };

  render() {
    return (
      <div className="App">
        <Form
          value={this.state.value}
          change={this.handleInputChange}
          submit={this.handleCitySubmit}
        />
        <Result weather={this.state} />
        <div className="clouds">
          <div className="cloud1">
            <div className="cloud" />
          </div>
          <div className="cloud2">
            <div className="cloud" />
          </div>
          <div className="cloud3">
            <div className="cloud" />
          </div>
          <div className="cloud4">
            <div className="cloud" />
          </div>
          <div className="cloud5">
            <div className="cloud" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
