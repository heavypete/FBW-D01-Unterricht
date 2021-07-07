
function testClassic() {
	console.log(this);
}
const testArrow = () => {
	console.log(this);
}
testClassic();
testArrow();


console.log(this);
