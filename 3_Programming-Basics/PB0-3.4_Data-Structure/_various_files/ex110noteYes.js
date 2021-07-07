const student = {
	firstName: "John",
	lastName: "Smith",
	course: 12,
	displayGeneralInformation() {
		return `${this.firstName} ${this.lastName} is a this in course ${this.course}`;
	}
};

console.log(student.displayGeneralInformation());




