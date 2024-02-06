import React, { useState, useRef } from 'react'
import { AddCard } from "./AddCard";
import { WeatherCard } from "./WeatherCard";


export const MainComponent = () => {
  const [weatherCards, setWeatherCards] = useState([]);
  const currentKeyCard = useRef(0);
  
  const countries = require("../data/countries.json");

  const addCard = () => {
    setWeatherCards([...weatherCards, currentKeyCard.current++]);
  }
  
  const removeCard = (index) => {
    console.log('removecard',index);
    const newCards = weatherCards.filter((card, i) => i !== index);
    console.log(newCards.length)
    setWeatherCards(newCards);
  }
  
  return (
    <main>
        <section className="weather-container">
          {weatherCards.map((key, index) => {
            return (
              <WeatherCard
                key={key}
                index={index}
                removeCard={removeCard}
                countries={countries}
              />
            )
          })}
          <AddCard addCard={addCard}/>
        </section>
      </main>
  )
}
