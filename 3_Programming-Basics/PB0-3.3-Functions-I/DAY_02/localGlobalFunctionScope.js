// 'use strict';

var test = "I'm global";
// let test = "I'm global";
// const test = "I'm global";
// test = "I'm global";

function testScope() {
	var test = "I'm local";
	// let test = "I'm local";
	// const test = "I'm local";
	// test = "I'm local";

	console.log(test);
}

testScope();           // output: I'm local

console.log(test);     // output: I'm global
