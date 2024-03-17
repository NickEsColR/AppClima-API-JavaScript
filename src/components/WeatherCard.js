import React, { useState } from "react";
import { getCities } from "../helpers/custom";
import { callAPI } from "../helpers/custom";

/**
 * Component that renders a card with the weather information
 * @param {int} index - Index of the card
 * @param {function} removeCard - Function to remove the card
 * @param {Array} countries - Array of countries
 * @returns {JSX.Element}
 */
export const WeatherCard = ({ index, removeCard, countries }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [hasCountry, setHasCountry] = useState(false);
  const [cities, setCities] = useState([]);

  /**
   * Function that calls the API to get the weather information
   * @param {*} e - Event
   */
  const getWeatherData = (e) => {
    e.preventDefault();
    const country = e.target.country.value;
    const city = e.target.city.value;
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

          setWeatherData({ country, city, arr, temp, temp_min, temp_max });
        }
      });
    }
  };

  /**
   * Function that removes the card
   * @param {*} e - Event
   */
  const handleDelete = (e) => {
    removeCard(index);
  };

  /**
   * Function that sets the cities for the selected country
   * @param {*} e - Event
   */
  const selectCountry = (e) => {
    setHasCountry(true);
    setCities(getCities(e.target.value));
  };

  return (
    <div className="weather-content">
      <span className="delete-btn" onClick={handleDelete}>
        x
      </span>
      {weatherData === null ? (
        <p>Agrege pais y cuidad</p>
      ) : (
        <div className="result">
          <h5>Clima en {weatherData.city}</h5>
          <img
            src={`https://openweathermap.org/img/wn/${weatherData.arr.icon}@2x.png`}
            alt="weather icon"
          />
          <h2>{weatherData.temp}°C</h2>
          <p>Min: {weatherData.temp_min}°C</p>
          <p>Max: {weatherData.temp_max}°C</p>
        </div>
      )}
      <form onSubmit={(e) => getWeatherData(e)} className="get-weather">
        <select
          name="country"
          id="country"
          defaultValue=""
          onChange={selectCountry}
        >
          (
          <option disabled value="">
            Select the country
          </option>
          )
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
        <select name="city" id="city" defaultValue="">
          {hasCountry ? (
            <option disabled value="">
              Select the city
            </option>
          ) : (
            <option disabled value="">
              Select the country first
            </option>
          )}
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
        <input type="submit" value="Get Weather" />
      </form>
      {errorMessage === "" ? (
        ""
      ) : (
        <p className="alert-message">{errorMessage}</p>
      )}
    </div>
  );
};
