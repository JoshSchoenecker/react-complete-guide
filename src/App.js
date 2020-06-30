import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
    </div>
  );
  //  JSX compiles to the below
 // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Does this work?'))
}

export default App;
