const sep = () => console.log('-'.repeat(30));
sep();

// =============================================
// TWO WAYS TO ITERATE THROUGH OBJECT PROPERTIES
// =============================================

let oldCar = {
	make: 'Toyota',
	model: 'Tercel',
	year: '1996'
};

// METHOD 1: for..in
for (let key in oldCar) {
	const value = oldCar[key];
	console.log(`${key} --> ${value}`);
}
sep();

// METHOD 2: Object.entries (more consise)
for (const [key, value] of Object.entries(oldCar)) {
	console.log(`${key} --> ${value}`);
}
sep();

// =====================================================
// USE FOR..OF FOR ARRAYS, DON'T USE FOR..IN WITH ARRAYS!
// =====================================================

const numbers = [1, 2, 3, 4, 5, 6];
// numbers.test = 'ok';

// correct
for (const number of numbers) {
	console.log(`using for..of: ${number}`);
}
sep();

// incorrect!
for (const number in numbers) {
	console.log(`using for..in: ${number}`);
	// number is the index!!!
}
sep();

const cities = ['Berlin', 'Hamburg', 'Leipzig', 'Stuttgart'];
cities.test = 'nn';
for (const city in cities) {
	console.log(city);
	// city is the index!!!
}
sep();

for (const index in cities) {
	const city = cities[index];
	console.log(city);
}
sep();

// =========================================================================
// USE FOR..IN TO ITERATE OVER INDEX VALUES OF ANY ITERABLE SUCH AS A STRING
// =========================================================================

let str = 'Turn the page';

for (let index in str) {
  console.log(`Index of ${str[index]}: ${index}`);
}