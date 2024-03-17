const cities = require("../data/countries-cities.json");

/**
 * Function to call the weather API
 * @param {string} city - city name
 * @param {string} country - country name
 * @returns {Promise} - Promise object represents the data from the API
 */
export const callAPI = (city, country) => {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${process.env.REACT_APP_API_KEY}&units=metric`;
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
};

/**
 * Function to get the cities of a country
 * @param {string} country - country name
 * @returns {Array} - Array of cities
 */
export const getCities = (country) => {
  return cities[country];
}