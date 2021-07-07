const firstName = 'Jim';
// Account Number
const person1 = {
	firstName,
	lastName: '',
	hasInsurance: false,
	accountNumber: 23423,
	course: 34,
	accountNumbers: [
		234234,
		3453345,
		345454
	],
	getFullName(prefix) {
		return `${prefix}: [${this.firstName}] ${this.lastName}`;
	},
	reset() {
		this.firstName = '';
		this.lastName = '';
		this.course = 0;
	}
};

console.log(person1);