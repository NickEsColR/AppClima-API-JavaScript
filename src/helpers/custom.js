import { API_KEY } from "../private/openweatherAPI";

const cities = require("../data/countries-cities.json");

export const callAPI = (city, country) => {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`;
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

export const getCities = (country) => {
  return cities[country];
}