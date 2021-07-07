console.log(this);

test1();
function test1() {
	console.log(this);
	console.log('classic');
}

const test2 = () => {
	console.log(this)
	console.log('arrow');
}

test2();