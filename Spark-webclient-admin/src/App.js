import logo from './logo.svg';
import './App.css';

function handleClick() {
  fetch('http://localhost:4000/')
      .then(response => response.json())
      .then(data => console.log(data));
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={handleClick}>Fetch data admin</button>
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
