import logo from './logo.svg';
import './App.css';
import React from 'react'
import TextInputForm from './components/TextInputForm'

function App() {
  const handleSubmitForm = (text) => {
    console.log("Enter your question: ", text);
  };

  return (
    <div className="App">
      <header className="App-header">
        Neuroscience Respondent
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Please enter a question below and receive a response.
          {/* Edit <code>src/App.js</code> and save to reload. */}
        </p>
        <a
          className="App-link"
          // href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Neuroscience!
        </a>
        <TextInputForm onSubmit = {handleSubmitForm} />
      </header>

    </div>
  );
}

export default App;
