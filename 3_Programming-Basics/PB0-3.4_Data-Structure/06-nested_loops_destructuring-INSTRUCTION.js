const ttt = (arg) => console.log('\u001b[1;32m' + `${'='.repeat(20)} ${arg} ${'='.repeat(20)}` + '\u001b[0m');

// ========================================================
ttt("1. NESTED LOOPS")
// ========================================================

let num = 3;
for (let i = 0; i <= num; i++) {
	for (let j = 0; j <= num; j++) {
		console.log(i, j);
	}
}

// ========================================================
ttt("2. NESTED ARRAYS")
// ========================================================

let normalArray = ["a", "b", "c", "d", "e"]; // length = 5
console.log(normalArray[0]); // access first item
console.log(normalArray[3]); // access fourth item

let nestedArray = [
	[1, 2, 1, 24], // [0]
	[8, 11, 9, 4], // [1]
	[7, 0, 7, 27],
	[7, 4, 28, 14],
	[3, 10, 26, 7] // inner array length = 4
]; // outer array length = 5 

console.log(nestedArray[0]); // first item of inner array
console.log(nestedArray[3]); // fourth item of inner array
console.log(nestedArray[3][0]); // first item of fourth item of inner array
console.log(nestedArray[3][1]); // third item of fifth item of inner array
console.log(nestedArray.length); // length of outer array 
console.log(nestedArray[2].length); // length of third inner array 


// ========================================================
ttt("3. GET INDEX WITH FOR-OF LOOP")
// ========================================================

const colors = ['red', 'blue', 'green'];
for (const [index, color] of colors.entries()) {
	console.log(index, color);
}

// ========================================================
ttt("4. DESTRUCTURING ASSIGNMENT")
// ========================================================

// the two most used data structures in JavaScript are Object and Array

// objects = allow us to create a single entity that stores data items by key
// arrays = allow us to gather data items into an ordered collection

// we often want to define variables not as a whole object or array, but as pieces of objects or pieces of arrays

// destructuring assignment is a syntax that allows us to unpack arrays or objects into pieces

let person = ["Hans", "Kantor", 34, "Engineer"]

// classic assignment
const firstName = person[0];
const lastName = person[1];
console.log(firstName, lastName);

// destructuring assignment
const [fname, lname] = person;
console.log(fname, lname);

// get specific items
const [fn, , age] = person;
console.log(`${fn} is ${age}`);

// ========================================================
ttt("5. USE DESTRUCTIONG ASSIGMENT ON STRINGS")
// ========================================================

let [var1, var2, var3, var4] = "abc"; // ["a", "b", "c"]
console.log(var1);              // a
console.log(var2);              // b
console.log(var3);              // c
console.log(var4);              // undefined 
console.log(typeof var1)        // string
console.log(typeof var4)        // undefined 
console.log([letter] = typeof var4);   // undefined


// ========================================================
ttt("6. DESTRUCTURING ARRAYS TO ASSIGN OBJECTS")
// ========================================================

let user = {};
[user.firstName, user.surname] = "Albrecht Altdorfer".split(' ');

console.log(user);
console.log(user.firstName);
console.log(user.surname);

// ========================================================
ttt("7. DESTRUCTURING ARRAYS FROM PARAMETERS")
// ========================================================

function getFullName([nationality, fname, lname]) {
	return `${lname}, ${fname}: ${nationality}`;
}

console.log(getFullName(['French', 'Simone', 'Weil']));
console.log(getFullName(['Chinese', 'Chiang', 'Kai-shek']));

// ========================================================
ttt("8. DESTRUCTURING OBJECTS FROM PARAMETERS")
// ========================================================

const employee = {
	firstName: 'Martina',
	lastName: 'Groniger',
	department: 'Sales',
	age: 36
};
// more common case, predefined property names need to be reused
function getInformation({firstName, age }) {
	return `${firstName} is ${age} years old.`;
}
console.log(getInformation(employee));
const { firstName: fstname, age: ag } = employee;
console.log(`${fstname} is ${ag} years old.`);