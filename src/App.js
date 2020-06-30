import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <Person />
      </div>
    );
  }
  //  JSX compiles to the below
  // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Does this work?'))
}

export default App;
