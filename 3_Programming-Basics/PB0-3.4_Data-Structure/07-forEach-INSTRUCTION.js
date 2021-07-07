const ttt = (arg) => console.log('\u001b[1;32m' + `${'='.repeat(20)} ${arg} ${'='.repeat(20)}` + '\u001b[0m');

// ========================================================
ttt("1. FOREACH IS SIMILAR TO FOR AND FOR-OF")
// ========================================================

/*
- the forEach method is similar to:
	- for(let i = 0; i < array.length, i++){}
	- for(const item of items) {}
- it loops through the array and runs the given callback for each of the elements of the array
*/

const nums = [1, 2, 3];

// for
for (let i = 0; i < nums.length; i++) {
	console.log(nums[i]);
}

// for-of
for (const num of nums) {
	console.log(num);
}

// forEach
nums.forEach(num => console.log(num));


// ========================================================
ttt("2. USE FOREACH AS REPLACEMENT FOR FOR AND FOR-OF")
// ========================================================

const sumNumbers = numbers => {
	let sum = 0;
	numbers.forEach(number => {
		sum += number;
	})
	return sum;
}

console.log(sumNumbers([1, 2, 3]));
console.log(sumNumbers([4, 5, 6, 7]));


// ========================================================
ttt("3. USE FOREACH'S THREE PARAMETERS: ITEM, INDEX, ARRAY")
// ========================================================

const firstNames = ['Hans', 'Georg', 'Kevin', 'Angelina'];

firstNames.forEach((name, index, arr) => {
	console.log(`"${name}" was name ${index + 1} of ${arr.length} to be processed.`);
});


// ========================================================
ttt("4. CREATE CUSTOM PROCESSING FUNCTIONS TO SEND TO FOREACH")
// ========================================================

const printFirstNames = person => console.log(person.firstName);
const printLastNames = person => console.log(person.lastName);

const employees = [
	{
		firstName: 'Hannah',
		lastName: 'Höfflich'
	},
	{
		firstName: 'Anna',
		lastName: 'Torgau'
	}
];

employees.forEach(printFirstNames);
employees.forEach(printLastNames);