// App.js
import React, { useState } from 'react';
import PublicKeyPattern from './PublicKeyPattern'; // make sure you have this component created
import './App.css';

const App = () => {
  const [hash, setHash] = useState('');

  const handleChange = (event) => {
    setHash(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form from submitting and refreshing the page
  };

  return (
    <div className="App">
      <h1>Bitcoin Hash Pattern Generator</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={hash}
          onChange={handleChange}
          placeholder="Enter Bitcoin hash"
        />
        <button type="submit">Generate</button>
      </form>
      <PublicKeyPattern hash={hash} />
    </div>
  );
};

export default App;

