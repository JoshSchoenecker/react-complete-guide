import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <Person name="Josh" age="25">My Hobbies: Coding</Person>
        <Person name="Alexis" age="25" />
      </div>
    );
  }
  //  JSX compiles to the below
  // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Does this work?'))
}

export default App;
