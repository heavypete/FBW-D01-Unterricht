
// let str = '';
// for (let i = 3; i <= 15; i += 3) {
// 	str += String(i) + ' ';
// }
// console.log(str);

// function getNumberString() {
// 	const arr = [];
// 	// for (let i = 3; i <= 15; i += 3) {
// 	for (const i of [3, 6, 9, 12, 15]) {
// 		arr.push(i);
// 	}
// 	return arr.join(', ') + ` (${arr.length} items)`;
// }

// const numberString = getNumberString();
// console.log(numberString);
// for (let i = 1; i <= 5; i++) {
// 	console.log(i);
// }

// [3, 6, 9, 12, 15].forEach(i => arr.push(i));
// const getNumbers = [3, 2, 5];
const getNumbers = (separator, ...arr) => arr.map(i => i * 3).join(separator);
console.log(getNumbers(", ",1,2,3,4,5,6,7,8,9));

// console.log(arr.join('-'));

// console.log([3, 6, 9, 12, 15].join('#'));