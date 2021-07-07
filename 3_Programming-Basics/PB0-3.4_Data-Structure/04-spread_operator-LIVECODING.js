const sep = () => console.log('-'.repeat(30));
sep();

console.log(Math.max(5, 7, 3, 56, 3333, -823));

console.log(Math.max(...[1, 5, 12, 4]));
console.log(Math.max());
sep();

const tip = "I like the arrow function because it doesn't change the 'this' variable.";

console.log(tip);
console.log(...tip);
console.log('I', ' ', 'l', 'i');

const tipLettersArr = tip.split('');
console.log(tipLettersArr);
console.log(...tipLettersArr);
sep();

// how strings are similar to arrays
// 1. spread operator
// 2. .length
console.log(tip.length);
console.log(tipLettersArr.length);
sep();
// 3. for (const item of object) {
for (const letter of tip) {
	console.log(letter);
}
for (const letter of tipLettersArr) {
	console.log(letter);
}
sep();


const magazine = {
	title: "Economist",
	pages: 91,
	date: '2021-07-01'
};
const physicalObject = {
	weight: .5,
	contents: 'paper'
};

// ADVANTAGES OF SPREAD OPERATOR WITH OBJECTS
console.log(magazine);
// console.log(...magazine);
console.log({ ...magazine });
// 1. you can send the contents of multiple objects into a new object
console.log({ ...magazine, ...physicalObject });
console.log(...Object.keys(magazine));
console.log(...Object.values(magazine));
console.log(...Object.entries(magazine));
sep();
const magazine2 = magazine;
// 2. you can create a deep-copy of an object instead of merely a copy of the reference to the object
const magazine3 = { ...magazine };
console.log(magazine, magazine2);
magazine.pages = 200;
console.log(magazine, magazine2);
sep();
console.log(magazine3);
sep();

const europeanCountries = ['Germany', 'France', 'Sweden'];
const asianCountries = ['China', 'Mongolia'];
function showCountries2(c1, c2, c3, c4) {
	// c3 = c3 === undefined ? 'test2' : c3;
	c3 = c3 || 'test3';
	console.log(arguments);
	console.log(`The first parameter is ${arguments[0]}`);
	console.log(`The second parameter is ${arguments[1]}`);
	console.log(`The third parameter is ${arguments[2]}`);
	console.log(c3);
}
showCountries2('n', 'nn', 'nnn', 'nnn');
showCountries2(europeanCountries, asianCountries);
showCountries2(...europeanCountries, ...asianCountries);
sep();

// rest parameter (not a spread operator!)
// a rest parameter is an array for the "rest of the parameters"
const showCountries = (...args) => {
	console.log(args);
	console.log(Array.isArray(args));
};
showCountries(1, 2, 3, 4);
sep();
const getData = (firstName, lastName, ...args) => {
	console.log(args);
}
getData('Michael', 'McDuffy', 123, 334, ['piano', 'violin']);

// can a classic function use the rest parameter?
function getMoreData(title, ...args) {
	console.log(args, title);
}
getMoreData('JavaScript Functional Programming', 343, 2021);
sep();

function iAmAFunction(param1, param2, ...rest) {
	// convert the array-like object "arguments" into a real array
	const args = [...arguments];
	console.log(args);
	console.log(arguments);    // [ 'Hello', 'have', 'a', 'nice', 'day', '!' ]
	console.log([...arguments]);    // [ 'Hello', 'have', 'a', 'nice', 'day', '!' ]
	console.log(rest);              // [ 'a', 'nice', 'day', '!' ]
}
iAmAFunction("Hello", "have", "a", "nice", "day", "!");
sep();