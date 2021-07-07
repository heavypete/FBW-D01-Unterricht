const sep = () => console.log('-'.repeat(30));
sep();

// ===================================================
// TURN ARRAYS INTO LIST OF ITEMS WITH SPREAD OPERATOR
// ===================================================

console.log( Math.max(3, 5, 1) ); // 5

// but if you have an array, it doesn't work
let arr = [3, 5, 1];
console.log( Math.max(arr) ); // NaN

// so you have to use the spread operator to spread the array out into individual parameters, as many as there are
console.log(Math.max(...arr)); // 5 
sep();

// ===================================================
// THE SPREAD OPERATOR OPERATES ON STRINGS AND ARRAYS 
// ===================================================

const str = 'This is a test.';
console.log(...str);

const numbers = [1, 2, 3, 4, 5];
console.log(...numbers)
	
const car = {
	make: 'Mazda',
	year: 1983,
	condition: 'poor'
};
// console.log(...car);
console.log(...Object.values(car));
sep();

// ============================================ 
// YOU CAN PASS MULTIPLE VARIABLES AS ITERABLES 
// ============================================ 

let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];
console.log( Math.max(...arr1, ...arr2) ); // 8
sep();

// ===========================================================
// YOU CAN COMBINE THE SPREAD OPERATOR WITH NORMAL VALUES
// ===========================================================

let arr3 = [1, -2, 3, 4];
let arr4 = [8, 3, -8, 1];
console.log( Math.max(1, ...arr3, 2, ...arr4, 25) ); // 25
sep();

// ===============================================
// THE SPREAD OPERATOR CAN BE USED TO MERGE ARRAYS
// ===============================================

let arr5 = [3, 5, 1];
let arr6 = [8, 9, 15];

let mergedArray = [ ...arr5, ...arr6];
let mergedArray2 = [0, ...arr5, 2, ...arr6];

console.log(mergedArray);   // [ 3, 5, 1, 8, 9, 15 ]
console.log(mergedArray2);  // [ 0, 3, 5, 1, 2, 8, 9, 15 ]
sep();

// ==================================================================================================
// WHEN USED TO SEND MULTIPLE ARGUMENTS IN A FUNCTION, THE SPREAD OPERATOR IS CALLED A REST PARAMETER
// ==================================================================================================

function iAmAFunction(param1, param2, ...rest) {
  console.log([...arguments]);    // [ 'Hello', 'have', 'a', 'nice', 'day', '!' ]
  console.log(rest);              // [ 'a', 'nice', 'day', '!' ]
}
iAmAFunction("Hello", "have", "a", "nice", "day", "!");
sep();

// ==============================================================================================================
// use rest parameter to CREATE FUNCTION THAT RETURNS SUM OF ALL ARGUMENTS NO MATTER HOW MANY ARGUMENTS THERE ARE
// ==============================================================================================================

let myNumbers = [2, 4, 6, 8, 21, 456];
let myNumbers3 = [2, 4, 6, 8, 21, 456, 645];

function sumAll(...args) {   // rest parameter is passed in the argument
    let sum = 0;
    console.log("num arr spreaded in the function call", args);
    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    }
    return sum;
}
console.log(sumAll(...myNumbers));      // 497
console.log(sumAll(...myNumbers, ...myNumbers3))      // 1639
sep();