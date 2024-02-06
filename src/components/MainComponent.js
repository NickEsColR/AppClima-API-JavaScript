import React, { useState } from 'react'
import { AddCard } from "./AddCard";
import { WeatherCard } from "./WeatherCard";

export const MainComponent = () => {
  const [WeatherCards, setWeatherCards] = useState([<WeatherCard key={0} />]);

  const addCard = () => {
    setWeatherCards([...WeatherCards, <WeatherCard key={WeatherCards.length}/>]);
  }



  return (
    <main>
        <section className="weather-container">
          {WeatherCards.map((card, index) => {
            return (
              <div key={index}>
                {card}
              </div>
            )
          })}
          <AddCard addCard={addCard}/>
        </section>
      </main>
  )
}
