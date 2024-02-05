function App() {
  return (
    <div className="App">
      <header>
        <h1>Buscador del clima</h1>
      </header>
      <main>
        <section class="weather-container">
          <div class="weather-content">
            <span class="delete-btn">x</span>
            <div class="result">
              <h5>Clima en Bogota</h5>
              <img src="10d@2x.png" alt="" />
              <h2>28°C</h2>
              <p>Max: 29°C</p>
              <p>Min: 27°C</p>
            </div>
            <form action="" method="POST" class="get-weather">
              <select name="" id="country">
                <option disabled selected value="">
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
              <select name="" id="city">
                <option disabled selected value="">
                  Select the city
                </option>
                <option value="Bogotá">Bogotá</option>
                <option value="Medellín">Medellín</option>
                <option value="Cartagena">Cartagena</option>
                <option value="Cali">Cali</option>
              </select>
              <input type="submit" name="" id="" value="Get Weather" />
            </form>
          </div>
          <div class="weather-content">
            <span class="delete-btn">x</span>
            <div class="result">
              <p>Agrege pais y cuidad</p>
            </div>
            <form action="" method="POST" class="get-weather">
              <select name="" id="country">
                <option disabled selected value="">
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
              <select name="" id="city">
                <option disabled selected value="">
                  Select the city
                </option>
                <option value="Bogotá">Bogotá</option>
                <option value="Medellín">Medellín</option>
                <option value="Cartagena">Cartagena</option>
                <option value="Cali">Cali</option>
              </select>
              <input type="submit" name="" id="" value="Get Weather" />
            </form>
          </div>
          <div class="weather-add">
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
