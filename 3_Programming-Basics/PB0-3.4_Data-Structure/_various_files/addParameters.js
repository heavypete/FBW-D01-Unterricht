function addParametersToObject(obj, arrParameters) {
	arrParameters.forEach(param => {
		obj[param] = '';
	});
}

const user = {
	firstName: 'Manuel',
	lastName: 'Neuer',
	age: 35
};

addParametersToObject(user, ['middleName']);
console.log(user);
