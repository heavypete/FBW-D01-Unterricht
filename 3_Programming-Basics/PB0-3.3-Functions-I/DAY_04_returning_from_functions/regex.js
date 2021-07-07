
// matches is null:
// function countLetters(str, findLetters) {
// 	console.log(lettersString);
// 	const matches = str.match(`/[${lettersString}]/gi`);
// 	return matches.join('');
// }
// console.log(countLetters('this is a test', ['t', 'i', 's']));


function countLetters(str, findLetters) {
		const lettersString = findLetters.join('');
	// const matches = str.match(`/[${lettersString}]/gi`); // matches are null
	const regex = new RegExp(`[${lettersString}]`, 'gi');
	const matches = str.match(regex);
	return matches.join('');
}
console.log(countLetters('this is a Test', ['t', 'i', 's']));