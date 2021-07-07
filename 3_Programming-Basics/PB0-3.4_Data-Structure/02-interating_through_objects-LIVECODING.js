const sep = () => console.log('-'.repeat(30));
sep();

const city = {
	name: "Berlin",
	population: 34444444,
	country: "Germany"
}

for (const property in city) {
	const value = city[property];
	// console.log(property, value);
	console.log(value);
}
sep();
// if you only want the value
for (const value of Object.values(city)) {
	console.log(value);
}
sep();
// if you only want the string values
for (const value of Object.values(city)) {
	if (typeof value === 'string') {
		console.log(value);
	}
}
sep();

const cities = ['Berlin', 'Amsterdam', 'Madrid'];

for (const index in cities) {
	const city = cities[index];
	console.log(index, city);
}
sep();

const title = "Masse und Macht";

for (const index in title) {
	const letter = title[index];
	console.log(index, letter);
}
sep();

const data = [
	['firstName', 'Paul'],
	['lastName', 'McGauphin']
];

const person = Object.fromEntries(data);
console.log(person);
sep();

const objPerson = {};
for (const [key, value] of data) {
	objPerson[key] = value;
}
console.log(objPerson);
sep();

const numbers = [1, 2, 3, 4];
// for (const number in numbers) { // indexes are strings!
for (const number of numbers) {
	console.log(number, typeof number);
}
sep();

const teams = ['France', 'Germany', 'Switzerland', 'Cuba'];
teams.info = 'These are the teams in the EM';
console.log(typeof teams);
console.log(Array.isArray(teams));
console.log(Array.isArray(objPerson));
for (const team in teams) {
	console.log(team);
}
console.log(teams.hasOwnProperty('info'));
console.log(teams.hasOwnProperty('Germany'));
console.log(teams.hasOwnProperty('1'));
console.log(teams.hasOwnProperty(1));
console.log(teams.hasOwnProperty(001));
console.log(teams.hasOwnProperty(5-2-2));
sep();
console.log('info' in teams); 
console.log('info2' in teams);

sep();
const str = 'This is a test.';
for (const strIndex in str) {
	const letter = str[strIndex];
	console.log(strIndex, letter);
}