import logo from './logo.svg';
import './App.css';
import Title from './component/Title'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      {/* <br/> this means like <b></b>*/}
      <Title/>
    </div>
  );
}

export default App;
