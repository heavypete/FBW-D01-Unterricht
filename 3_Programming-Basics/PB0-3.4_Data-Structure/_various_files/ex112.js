function countLetters(str) {
	const strToArr = str.split("");
	console.log(strToArr);
	const letterCount = {};
	for (let i = 0; i < strToArr.length; i++) {
		if (letterCount.hasOwnProperty(strToArr[i])) {
			letterCount[strToArr[i]]++;
		} else {
			letterCount[strToArr[i]] = 1;
		}
	}
	return letterCount;
}

console.log(countLetters("woolloomooloo"));

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze