function wordRank(sentence) {
	const regex = /[A-Za-z]+/gm;
	const words = sentence.match(regex);
	console.log(words);

	const ranking = [];
	for (let i = 0; i < words.length; i++) {
		let wordScore = 0;
		const word = words[i];
		for (let y = 0; y < word.length; y++) {
			const letterScore = word.toLowerCase().charCodeAt(y) - 96;
			wordScore += letterScore;
		}
		ranking.push(wordScore);
	}
	console.log(ranking);
	let winningPosition = 0;
	for (let i = 0; i < ranking.length; i++) {
		if (i === 0) {
			// first entry, skip over
			continue;
		}
		if (ranking[i] > ranking[winningPosition]) {
			winningPosition = i;
		}
	}
	return `"${words[winningPosition]}" is the winner with a score of ${ranking[winningPosition]}`;
}
console.log(wordRank("Testing, one, 2, three"));
// console.log(wordRank("Testing,"));