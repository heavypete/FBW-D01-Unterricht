// const test = (num) => {
// 	console.log(arguments);
// }

// test(343);


function abc() {
    console.log( arguments.callee.name );
}

const abcd = (...args) => {
	console.log(args);
}

abc();

abcd(123123,123123,'asfasdf');