// const str = "This is a string.";

// for (let i = 0; i < str.length; i += 1) {
// 	const letter = str[i];
// 	console.log(letter);
// }


// iii
function countLetters(str, findLetters) {
	// function countLetters(str) {
	// let result = '';
	// for (const letter of str) {
	// if (findLetters.includes(letter)) {
	// if (findLetters.includes(letter)) {
	// const matches = str.match(/[its]/gi);
	const lettersString = findLetters.join('');
	console.log(lettersString);
	// const matches = str.match(`/[${lettersString}]/gi`);
	const matches = str.match(`/[${lettersString}]/gi`);
	// 	result += letter;
	// }
	// }
	// return result;
	return matches.join('');
}


console.log(countLetters('this is a test', ['t', 'i', 's']));
// console.log(countLetters('this is a test'));


