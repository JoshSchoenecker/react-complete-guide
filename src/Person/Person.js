import React from 'react'

// This is a functional comp, "stateless"

// es6 syntax of making a function (arrow function)
const person = (props) => {
    return <p> Hello, my name is {props.name} and I am {props.age} years old!</p>
};

export default person