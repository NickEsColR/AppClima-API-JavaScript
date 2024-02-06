import { WeatherCard } from "./components/WeatherCard";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Buscador del clima</h1>
      </header>
      <main>
        <section className="weather-container">
          <WeatherCard/>
          <div className="weather-add">
            <p>+</p>
          </div>
        </section>
      </main>
      <footer>
        <p>
          Developed by <a href="https://github.com/NickEsColR">NickEsColR</a>
        </p>
        <p>&copy; 2024</p>
      </footer>
    </div>
  );
}

export default App;
