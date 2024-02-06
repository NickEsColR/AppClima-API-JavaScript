import React, { useState } from "react";
import { callAPI, kelvinToCentigrade } from "../helpers/custom";

export const WeatherCard = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const getWeatherData = (e) => {
    e.preventDefault();
    const country = e.target.country.value;
    const city = e.target.city.value;
    console.log(country === "" || city === "");
    if (city === "" || country === "") {
      setErrorMessage("Ambos campos son obligatorios");
    } else {
      setErrorMessage("");
      callAPI(city, country).then((dataJSON) => {
        if (dataJSON.cod === "404") {
          setErrorMessage("Ciudad no encontrada");
        } else {
          const {
            main: { temp, temp_min, temp_max },
            weather: [arr],
          } = dataJSON;

          const degrees = kelvinToCentigrade(temp);
          const min = kelvinToCentigrade(temp_min);
          const max = kelvinToCentigrade(temp_max);

          setWeatherData({ country, city, arr, degrees, min, max });
        }
      });
    }
  };

  return (
    <div className="weather-content">
      <span className="delete-btn" >x</span>
      {weatherData === null ? (
        <p>Agrege pais y cuidad</p>
      ) : (
        <div className="result">
          <h5>Clima en {weatherData.city}</h5>
          <img
            src={`https://openweathermap.org/img/wn/${weatherData.arr.icon}@2x.png`}
            alt="weather icon"
          />
          <h2>{weatherData.degrees}°C</h2>
          <p>Min: {weatherData.min}°C</p>
          <p>Max: {weatherData.max}°C</p>
        </div>
      )}
      <form onSubmit={(e) => getWeatherData(e)} className="get-weather">
        <select name="country" id="country" defaultValue="">
          <option disabled value="">
            Select the country
          </option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">España</option>
          <option value="US">Estados Unidos</option>
          <option value="MX">México</option>
          <option value="PE">Perú</option>
        </select>
        <select name="city" id="city" defaultValue="">
          <option disabled value="">
            Select the city
          </option>
          <option value="Bogotá">Bogotá</option>
          <option value="Medellín">Medellín</option>
          <option value="Cartagena">Cartagena</option>
          <option value="Cali">Cali</option>
        </select>
        <input type="submit" value="Get Weather" />
      </form>
      {errorMessage === "" ? "" : <p className="alert-message">{errorMessage}</p>}
    </div>
  );
};
