const student = { 
  firstName: "John", 
  lastName: "Smith", 
  course: 12 
};

function displayGeneralInformation(objStudent) {
	return `${objStudent.firstName} ${objStudent.lastName} is a student in course ${objStudent.course}`;
}

console.log(displayGeneralInformation(student));




