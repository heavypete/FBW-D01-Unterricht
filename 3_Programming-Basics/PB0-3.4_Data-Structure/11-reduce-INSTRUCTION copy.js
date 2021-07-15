const ttt = (arg) => console.log('\u001b[1;32m' + `${'='.repeat(20)} ${arg} ${'='.repeat(20)}` + '\u001b[0m');
// EXECUTE WITH: 
// -------------------------------------
// node filename | less - ri
// -------------------------------------
// -r = allows colors
// -i = allows case-insensitive comparisons
// -------------------------------------
// arrow-keys, j, k = move up and down
// / = search downward
// ? = search upward
// n = repeat search
// N = repeat search in opposite direction
// e.g. search for next task with: /== and then n, n, n and N, N, N to browse tasks
// gg = go to first line
// G = go to last line 


// ========================================================
ttt("1. REDUCE() BASICS")
// ========================================================

// the reduce() method changes an accumulator value for each item of your array resulting in a single output value

const nums = [1, 2, 3, 4];

// get sum of values with reduce()
console.log(nums.reduce((accumulatingValue, currentItem) => accumulatingValue + currentItem, 0));

// get sum of values the old way before reduce()
let accumulatingValue = 0;
for (const currentItem of nums) {
	accumulatingValue = accumulatingValue + currentItem;
}
console.log(accumulatingValue);


// ========================================================
ttt("2. ALWAYS PROVIDE AN INITIAL VALUE")
// ========================================================

const calculateSum = (acc, m) => acc + m;

// start counting with the initial value, fails if array is empty 
console.log(nums.reduce(calculateSum));

// start counting with 0
console.log(nums.reduce(calculateSum, 0));

// start counting with 100
console.log(nums.reduce(calculateSum, 100));


// ========================================================
ttt("3. SEE INNER WORKINGS OF REDUCE")
// ========================================================

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, m, index, arr) => {
	console.log(`acc=${acc}, m=${m}, index=${index}, arr=${arr}`);
	return acc += m;
}, 100);
console.log(sum);

// ========================================================
ttt("4. REDUCE TO A STRING")
// ========================================================

console.log(numbers.reduce((acc, curr) => acc + ' > ' + curr, 'NUMBERS'));

// ========================================================
ttt("5. REDUCE TO AN ARRAY")
// ========================================================

// console.log(numbers.reduce((acc, curr) => acc.push(curr * 2), []));
console.log(numbers.reduce((acc, curr) => {
	acc.push(curr * 2);
	return acc;	
}, []));

// ========================================================
ttt("6. REDUCE TO AN OBJECT")
// ========================================================

console.log(numbers.reduce((acc, curr) => {
	acc[`num_${curr}`] = curr
	return acc;	
}, {}));