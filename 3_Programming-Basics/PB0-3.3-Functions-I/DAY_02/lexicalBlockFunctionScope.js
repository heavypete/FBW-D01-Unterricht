var globalVar = 'This is global'; // lexical scope for var

function testScope() {
	var insideVariable = 'nnn'; // function scope for var
	if (true) {
		var greeting = 'Hello'; // no block scope for var
		// let greeting = 'Hello'; // block scope :-)
		// const greeting = 'Hello'; // block scope :-) 
		console.log(greeting);
		console.log(globalVar); 
	}
	console.log(greeting);
}

testScope();
console.log(insideVariable);

