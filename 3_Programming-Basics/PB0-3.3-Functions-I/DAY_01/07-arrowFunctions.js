// Arrow Functions are very convenient for simple one-line actions

/*
Arrow functions are handy for one-liners. They come in two flavors:
Without curly braces: (...args) => expression – the right side is an expression: the function evaluates it and returns the result.
With curly braces: (...args) => { body } – brackets allow us to write multiple statements inside the function, but we need an explicit return to return something.
*/

// 1.

let sum = (a, b) => a + b;

/* The arrow function is a shorter form of:
let sum = function(a, b) {
  return a + b;
};
*/

console.log( sum(1, 2) ); // 3

// ----------##---------
// 2.

// arrow function with { body } without a return statement
let sum2 = (a, b) => {
  a + b;
}

console.log(sum2(2, 5));    // undefined

// ----------##---------
// 3.

// arrow function with { body } and an explicit return statement
let sum3 = (a, b) => {
  return a + b;
}

console.log(sum3(2, 5));    // 7

// ---------##---------
// If we have only one argument, then parentheses can be omitted
// 4.

let double = number => number * 2;

console.log( double(3) ); // 6

// ---------##---------
// 5.

// If there are no arguments, parentheses should be empty (but they should be present):

let sayHi = () => console.log("Hello222222222!");

sayHi();

// ---------##---------
// 6.

// Arrow functions can be used in the same way as Function Expressions.

let age = 19;

let welcome = (age < 18) ?
(firstName, lastName = "Doe") => console.log(`Hello! ${firstName + ' ' + lastName}`) :
(firstName, lastName = "Doe") => console.log(`Welcome! ${firstName + ' ' + lastName}`);

welcome("Franz"); // welcome


// ---------##---------
// Multi-line Arrow Functions
// 7.

let newSum = (a, b) => {  // the curly brace opens a multiline function
    let result = a + b;
    return result; // if we use curly braces, use return to get results
};
  
console.log( newSum(1, 2) ); // 3

// ---------##---------
// 8.

const power = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
      result *= base;
    }
    return result;
  };

  console.log(power(2, 4));