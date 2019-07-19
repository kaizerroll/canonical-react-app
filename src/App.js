import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './components/myComponent';

function App() {
  const [x, setX] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      setX(x => x+1);
    }, 1)
  })

  return (
    <div className="App">
      <h1>React is superior to angular!</h1>
      <h2>It's much simpler to learn</h2>
      <MyComponent turtle={x}/>
    </div>
  );
}

export default App;
