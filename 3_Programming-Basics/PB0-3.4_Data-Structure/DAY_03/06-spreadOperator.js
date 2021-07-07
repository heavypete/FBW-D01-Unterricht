console.log( Math.max(3, 5, 1) ); // 5

// Now let’s say we have an array [3, 5, 1]. How do we call Math.max with it?

// Passing it “as is” won’t work, because Math.max expects a list of numeric arguments, not a single array:

let arr = [3, 5, 1];

console.log( Math.max(arr) ); // NaN

// And surely we can’t manually list items in the code Math.max(arr[0], arr[1], arr[2]), because we may be unsure how many there are. 
// As our script executes, there could be a lot, or there could be none. And that would get ugly.

// Spread operator to the rescue!

// ---------------------------------------------- //

// Spread operator looks similar to rest parameters, also using ..., but does quite the opposite.
// When ...arr is used in the function call, it “expands” an iterable object arr into the list of arguments.
// The spread operator operates only on iterables.


let arr = [3, 5, 1];

console.log( Math.max(...arr) ); // 5 (spread turns array into a list of arguments)

// ---------------------------------------------- //
// !!!The spread operator operates only on iterables.

// iterables:
// strings,          array,                     object
// "abcd",  [1, 2, 3, true, false], {fiestName: "John", lastName: "Doe"}

// noniterables:
// boolean    number      null      undefined
// true        245        null      undefined
// ---------------------------------------------- //

// We also can pass multiple iterables this way:
let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

console.log( Math.max(...arr1, ...arr2) ); // 8

// ---------------------------------------------- //

// We can even combine the spread operator with normal values:
let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

console.log( Math.max(1, ...arr1, 2, ...arr2, 25) ); // 25

// ---------------------------------------------- //

// Also, the spread operator can be used to merge arrays:

let arr3 = [3, 5, 1];
let arr4 = [8, 9, 15];

let mergedArray = [ ...arr3, ...arr4];
let mergedArray2 = [0, ...arr3, 2, ...arr4];

console.log(mergedArray);   // [ 3, 5, 1, 8, 9, 15 ]
console.log(mergedArray2);  // [ 0, 3, 5, 1, 2, 8, 9, 15 ]

let clonedArr3 = arr3;
console.log(clonedArr3);    // [ 3, 5, 1 ]

// ---------------------------------------------- //

// In the examples above we used an array to demonstrate the spread operator, but any iterable will do.

// For instance, here we use the spread operator to turn the string into array of characters:

let str = "Hello";

console.log( [...str] ); // H,e,l,l,o

// OR

// let spreadStr = ...str;  // error!!
let spreadStr = [...str];
console.log(spreadStr);    // [ 'H', 'e', 'l', 'l', 'o' ]

let spreadStr2 = {...str};
console.log(spreadStr2);    // { '0': 'H', '1': 'e', '2': 'l', '3': 'l', '4': 'o' }

// won't work!
let spreadStr3 = "...str";
console.log(spreadStr3);   // ...str

// The spread operator internally uses iterators to gather elements, the same way as for..of does.

// ---------------------------------------------- //
function iAmAFunction(param1, param2, ...rest) {
  console.log([...arguments]);    // [ 'Hello', 'have', 'a', 'nice', 'day', '!' ]

  console.log(rest);              // [ 'a', 'nice', 'day', '!' ]
}

iAmAFunction("Hello", "have", "a", "nice", "day", "!");

// ---------------------------------------------- //
// 1. create a function that returns the sum of all of it's arguments (no matter how many arguments there are)
let myNumbers = [2, 4, 6, 8, 21, 456];
let myNumbers3 = [2, 4, 6, 8, 21, 456, 645];

function sumAll(...num) {   // rest parameter is passed in the argument
    let sum = 0;
    console.log("num arr spreaded in the function call", num);
    // num arr spreaded in the function call [ 2, 4, 6, 8, 21, 456 ]

    for (let i = 0; i < num.length; i++) {
        sum += num[i];
    }
    // console.log(args);  
    return sum;
}

// using spread operator in the function call to pass an array of numbers
console.log(sumAll(...myNumbers));      // 497
console.log(sumAll(...myNumbers, ...myNumbers3))      // 1639