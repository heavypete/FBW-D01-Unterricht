const ttt = (arg) => console.log('\u001b[1;32m' + `${'='.repeat(20)} ${arg} ${'='.repeat(20)}` + '\u001b[0m');

// ========================================================
ttt("1. NESTED LOOPS")
// ========================================================

for (let w = 1; w <= 8; w++) {
	for (let h = 1; h <= 8; h++) {
		console.log(w, h);
	}
}

// ========================================================
ttt("2. NESTED ARRAYS")
// ========================================================

const cities = ['Berlin', 'Hamburg', 'Amsterdam'];
const events = ['5K Lauf', '10K Lauf', 'Halbmarathon'];
// console.log(cities[1]);

const cityEvents = [];
for (const city of cities) {
	for (const event of events) {
		cityEvents.push([city, event]);
	}
}
console.log(cityEvents);

// ========================================================
ttt("3. GET INDEX WITH FOR-OF LOOP")
// ========================================================

// let count = 1;
// for (const city of cities) {
// 	console.log(`${count}. ${city}`); // 1. Berlin
// 	count++;
// }

for (const [index, city] of cities.entries()) {
	console.log(`${index + 1}. ${city}`); // 1. Berlin
}

// ========================================================
ttt("4. DESTRUCTURING ASSIGNMENT")
// ========================================================

const [firstGermanCity, secondGermanCity] = cities;
const [, , dutchCity] = cities;
console.log(firstGermanCity);
console.log(secondGermanCity);
console.log(dutchCity);

// ========================================================
ttt("5. DESTRUCTURING OBJECTS FROM PARAMETERS")
// ========================================================

const employee = {
	firstName: ['Martina', 'Maria', 'Gomez'],
	lastName: 'Groniger',
	department: 'Sales',
	age: 36
};
// more common case, predefined property names need to be reused
// aliases, default values
function getInformation({ firstName: names, age = 999 }) {
	return `${names[2]} is ${age} years old.`;
}
console.log(getInformation(employee));

// ========================================================
ttt("6. DESTRUCTURING ARRAYS FROM PARAMETERS")
// ========================================================

function getFullName([nationality, fname = '(first name unknown)', lname = '(last name unknown)']) {
	return `${lname}, ${fname}: ${nationality}`;
}

// default value
console.log(getFullName(['French', 'Simone', 'Weil']));
console.log(getFullName(['Chinese', 'Chiang', 'Kai-shek']));
console.log(getFullName(['Germany', 'Georg']));
console.log(getFullName(['Germany', , 'Hanselmann']));


// ========================================================
ttt("7. DESTRUCTURING ARRAYS DEEPLY INTO OBJECTS")
// ========================================================

let user = {
  europeanNames: { test: {} },
  asiaNames: { test2: {} },
};
[
  user.europeanNames.names,
  user.asiaNames.surnames,
  user.europeanNames.test.ciao,
  user.asiaNames.test2,
  ciao2,
] = 'Albrecht Altdorfer mark luka'.split(' ');
console.log(user);