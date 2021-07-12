import logo from './logo.svg';
import './App.css';
import Message from './Message';

const text = "const's value";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Message text={text}/>
        </header>
    </div>
  );
}

export default App;
