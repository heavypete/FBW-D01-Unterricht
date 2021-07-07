const _ = require('lodash');

const field1 = 'firstName';

const student = {
	[field1]: "John",
	lastName: "Smith",
	course: 12,
	printDetails() {
		return `${this.firstName} ${this.lastName} is in course ${this.course}.`;
	},
	printCourse() {
		return `This course is ${this.course}`
	}, getLengthOfObject() {
		let size = 0;
		let key;
		for (key in this) {
			if (typeof this[key] !== 'function') {
				console.log(`${key} is ${typeof this[key]} - ${this[key]}`);
				size++;
			}
		}
		return size;
	}, setCourse(course) {
		this.course = course;
	},
	let: 'ok'
};

student.newInformation = '334';
delete student.newInformation;

const fieldName = 'license';
student[fieldName] = '2334ad';


console.log(student.printDetails());
student.setCourse(222);
console.log(student.printCourse());
console.log(student.getLengthOfObject());

console.log(student.newInformation);
console.log(student.license);
console.log(student.let);


const student_b = {
	firstName: 'Hans'
};
const student_c = {
	firstName: 'Hans'
};


console.log(student === student_b);
console.log(_.isEqual(student, student_b));
console.log(_.isEqual(student_b, student_c));
student.license = 'nnn';
console.log("license" in student);


let user2 = { name: "John", age: 30 };
console.log("age2" in user2);
console.log('nnnnnnn');
  
for (let key in user2) {
	const value = user2[key];
	console.log(`${key} = ${value}`);
}