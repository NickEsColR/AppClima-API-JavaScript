import { MainComponent } from "./components/MainComponent";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Buscador del clima</h1>
      </header>
      <MainComponent/>
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
