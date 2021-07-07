const ttt = (arg) => console.log('\u001b[1;32m' + `${'='.repeat(20)} ${arg} ${'='.repeat(20)}` + '\u001b[0m');

// ========================================================
ttt("1. SIMPLE MAP")
// ========================================================

// The map() method creates a new array with the results of calling a provided function on every element in the calling array.

// The arr.map method is one of the most useful and often used.
// It calls the function for each element of the array and returns the array of results.

// When we need to simply iterate over an array – we can use forEach, for or for..of.
// When we need to iterate and return the data for each element – we can use map.
// The map() method creates a new array with the results of calling a function for every array element.

// The map() method calls the provided function once for each element in an array, in order.

// !!!map() does not change the original array.

let arr = [1, 2, 3, 4, 5];
let squareArr = arr.map(num => num ** 2);
console.log(squareArr);

// ========================================================
ttt("2. COMPARE CLASSIC/ARROW SYNTAX IN MAP")
// ========================================================

let numArr2 = [1, 4, 9];

// classic
let doubles = numArr2.map(function(num) {
    return num * 2;
})
console.log(doubles);

// arrow 
let doubles2 = numArr2.map(num => num * 2)
console.log(doubles2);


// ========================================================
ttt("3. MAP DIRECTLY ON ARRAY")
// ========================================================

const lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
console.log(lengths);


// ========================================================
ttt("4. USE MAP TO PROCESS STRINGS WITH SPLIT")
// ========================================================

let code = "L2S6L3S4";

let newCode = code.split('').map(item => {
    if ( item === "L" || item === "S" ) {
        return item;
    } else {
        return item * 2;
    }
}).join("")

console.log(code);
console.log(newCode);

// ========================================================
ttt("5. BE AWARE OF THE TWO OTHER PARAMETERS AVAILABLE IN MAP")
// ========================================================

let scores = [78, 66, 98, 56, 88];
scores.sort((a,b) => a - b);
const messages = scores.map((score, index, arr) => {
	return `You received a ${score} on the test (${index+1} out of ${arr.length}).`;
});
console.log(messages);


// ========================================================
ttt("6. USE JAVASCRIPT FUNCTIONS DIRECTLY WITH MAP")
// ========================================================

let numbers = [4, 9, 16, 25];

const processMathSqrt = (nums) => nums.map(Math.sqrt);
const processMathCbrt = (nums) => nums.map(Math.cbrt);

console.log(processMathSqrt(numbers));
console.log(processMathCbrt(numbers));

// ========================================================
ttt("7. CREATE ORIGINAL FUNCTIONS TO USE WITH MAP")
// ========================================================

let employees = [
	{ fname: 'Robert', lname: 'Hoffmann'},
	{ fname: 'Christa', lname: 'Schultz'},
];

const addCompanyFields = person => {
	person.department = null;
	person.start_date = null;
	person.tax_id = null;
	return person;
}

const addPersonalFields = person => {
	person.birthday = null;
	return person;
}

let processedEmployees = [...employees];
console.log(processedEmployees);
processedEmployees = employees.map(addPersonalFields);
console.log(processedEmployees);
processedEmployees = employees.map(addCompanyFields);
console.log(processedEmployees);