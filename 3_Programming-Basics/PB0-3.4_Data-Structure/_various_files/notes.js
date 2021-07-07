
const programming = {
	languages: ["JavaScript", "Python", "Ruby"],
	isChallenging: true,
	isRewarding: true,
	books: ['Sapiens', 'Masse und Macht'],
	difficulty: 8,
	jokes:
		"http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
	challengingSentence() {
		return 'nnn';
	}
};

const languages = 'books';
// for (const language of programming['languages']) {
for (const language of programming.languages) {
	console.log(language);
}

console.log(programming.challengingSentence);

console.log(Number.MIN_VALUE);



const unique = arr => {
	return arr.filter(value => {
		console.log(arr.indexOf(value), arr.lastIndexOf(value));
		arr.indexOf(value) === arr.lastIndexOf(value)
	});
};

const unique3 = arr => {   
	return arr.filter(value => value === 3);
};

console.log(unique([3, 6, 6, 5, 3, 4,]));

