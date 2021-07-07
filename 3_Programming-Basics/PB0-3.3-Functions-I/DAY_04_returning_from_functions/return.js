
function doNothing2() {
	/* empty */

	// return 'nnn';
	// console.log('nnn');
	return;
}

console.log(doNothing2());


function changeObject(obj) {
	/* empty */

	// return 'nnn';
}



function checkAge(age) {
	if (age > 18) {
		return true;
	} else {
		return false;
	}
}

const age = 26;
if (checkAge(age)) {
	console.log('you are an adult');
} else {
	console.log('you are not an adult');
}