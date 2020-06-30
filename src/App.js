import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  // State is only available in class based comps not functional comps.
  // use the state carefully. having to many comps w/ states storing and manipulating the same info is messy.
  state = {
    persons: [
      { name: "Josh", age: 25 },
      { name: "Alexis", age: 25 },
      { name: "Austin", age: 24 },
    ],
  };

  // appending 'Handler' to the end of a method means not activley calling, but assigning as an event handler.
  switchNameHandler = () => {
    this.setState({
      persons: [
        {name: 'Joshua', age: 26},
        { name: "Alex", age: 26 },
        { name: "Austin", age: 24 },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        >
          My Hobbies: Coding
        </Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
  //  JSX compiles to the below
  // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Does this work?'))
}

export default App;
