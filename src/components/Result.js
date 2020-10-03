import React from "react";
import "./Result.css";

const Result = (props) => {
  const {
    date,
    city,
    sunrise,
    sunset,
    temp,
    pressure,
    wind,
    err,
  } = props.weather;

  let content = null;

  if (!err && city) {
    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString(); //sunrise time comes without ms (*1000)
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();

    content = (
      <>
        <h1>{city}</h1>
        <h2>
          Date: <span>{date}</span>
        </h2>
        <h2>
          Temperature: <span>{temp} &#176;C</span>
        </h2>
        <h2>
          Sunrise: <span>{sunriseTime}</span>
        </h2>
        <h2>
          Sunset: <span>{sunsetTime}</span>
        </h2>
        <h2>
          Wind: <span>{wind} m/s</span>
        </h2>
        <h2>
          Pressure: <span>{pressure} hPa</span>
        </h2>
      </>
    );
  }

  return (
    <div className="result">{err ? `City ${city} not found:(` : content}</div>
  );
};

export default Result;
