
// STRINGS GET A COPY OF THE VALUE FROM OTHER STRINGS
// let firstName2 = firstName1;
firstName1 = 'Jim';
let firstName2 = firstName1;

console.log(firstName1);
console.log(firstName2);

// NUMBERS GET A COPY OF THE VALUE FROM OTHER NUMBERS
let age1 = 23;
let age2 = age1;
age1 = 24;

console.log(age2);

// BOOLEANS GET A COPY OF THE VALUE FROM OTHER BOOLEANS
let isOnline1 = true;
let isOnline2 = isOnline1;
isOnline1 = false;

console.log(isOnline2);

// ARRAYS GET A REFERENCE TO THE VALUE OF OTHER ARRAYS 
let words1 = ['Haus', 'Baum'];
// const words2 = words1;
// words1 --> ['Haus', 'Baum'] <-- words2
// words1.push('Aschenbecher');
// words1.sort();
words1 = ['Badezimmer']; // gets a new POINTER: words2 --> ['Badezimmer']

console.log(words1);
// console.log(words2);

// OBJECTS GET A REFERENCE TO THE VALUE OF OTHER OBJECTS
const user1 = {
	firstName: 'Hans',
	lastName: 'Schmidt',
	getFullName() {
		return this.firstName + ' ' + this.lastName
	},
	accountNumbers: [
		234234,
		234343423,
	]
}
const user2 = user1; // user1 --> { firstName: 'Hans', lastName: 'Schmidt' } <-- user2
const user3 = { ...user1 };
user1.firstName = 'Jan';
user2.firstName = 'John';

console.log(user1);
console.log(user2);
console.log(user3);

// 1, 2, 3, 4, 5, 6
const ecKarte1 = [234, 345, 3634, 2454, 2334, [111,222]];
let ecKarte2 = ecKarte1;
const ecKarte3 = [...ecKarte1];

ecKarte1.push(1000);

// ecKarte2 = [500];

console.log(ecKarte1);
console.log(ecKarte2);
console.log(ecKarte3);

