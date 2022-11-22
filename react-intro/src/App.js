import logo from "./logo.svg";
import "./App.css";
import ButtonComponent from "./components/FirstConponent";
import ImagenComponent from "./components/ImagenConponent";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ImagenComponent
          src="https://i.pinimg.com/236x/9c/01/07/9c010789060ea2b066042f5934753938.jpg"
          alt="bald_dog"
        />

        <ButtonComponent label="New button" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
