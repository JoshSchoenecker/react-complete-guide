//  useState allows us to use the state in a functional comp
import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const App = props => {
  // State is only available in class based comps not functional comps. unless using hooks.
  // use the state carefully. having to many comps w/ states storing and manipulating the same info is messy.

  // square brackets: array destructuring, allows us to pull elements out of the array you get back from the right side of the equals
  // personsState gives us access to the object
  // setPersonsState allows us to set a new state
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Josh", age: 25 },
      { name: "Alexis", age: 25 },
      { name: "Austin", age: 24 },
    ],
  });

  const [otherState, setOtherState] = useState({otherState: 'some other value'})

  // console.log("personState:",personsState);
  // console.log("otherState:",otherState);
  
  
  // appending 'Handler' to the end of a method means not activley calling, but assigning as an event handler.
const switchNameHandler = () => {
  setPersonsState({
    persons: [
      { name: "Joshua", age: 26 },
      { name: "Alex", age: 26 },
      { name: "Austin", age: 24 },
    ],
  });
};

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}>
        My Hobbies: Coding
      </Person>
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      />
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
  //  JSX compiles to the below
  // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Does this work?'))
};

export default App;


