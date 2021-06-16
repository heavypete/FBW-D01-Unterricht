useMeAnywhere();
// useMeAfterYouDeclareMe(); // ReferenceError: Cannot access

// function declaration
function useMeAnywhere() {
	console.log('I can be used anywhere.');
}

// function expression
const useMeAfterYouDeclareMe = () => console.log('You can only use me after you declare me.');

useMeAfterYouDeclareMe(); // works 