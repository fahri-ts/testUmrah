import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
		<img src={logo} className="App-logo" alt="logo" />
      </header>
	  <body className="App-body">
		<a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
	  </body>
    </div>
  );
}

export default App;
