import React from "react";

// This is a functional comp, "stateless"

// es6 syntax of making a function (arrow function)
// props allow you to pass data from a parent comp
const person = (props) => {
  return (
    <div>
      <p>
        Hello, my name is {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
    </div>
  );
};

export default person;
