const _ = require('lodash');
const { property } = require("lodash");

const user = {
	firstName: 'Edward',
	lastName: 'Schmidt',
	status: null 
};
user.isAdmin = true;
delete user.lastName;
console.log(user);



const buildObject = (properties) => {
	const obj = {};
	for (const property of properties) {
		obj[property] = '';
	}
	return obj;
}

const properties = ['firstName','middleName', 'lastName'];
const obj = buildObject(properties);

console.log(obj);


const personA = {       // nested object
	name: {
		first_name: "John",
		last_name: "Doe"
	},
	age: 32,
	address: {
		strNum: 55,
		strName: "Abc",
		pinCode: 12334,
		country: "Germany"
	},
	companiesWorkedWith: {
		name: "dci",
		duration: "2years",
		year: 2023,
	}
};

console.log(personA.companiesWorkedWith.year);


user1 = {
	firstName: 'Hans',
	age: 23
};

user2 = {
	firstName: 'Hans',
	age: 23
};
const user3 = user2;
console.log(user1 === user2); // false: values are not the same in memory
console.log(user3 === user2); // true: values are the same in memory
console.log(user1);
console.log(user1.age === user2.age); // true
console.log(_.isEqual(user1, user2));

console.log('---------------');

const firstName = 'Anke';
const lastName = 'Meier';

const person1 = {
	firstName,
	lastName: 'Schmidt',
	hasInsurance: false,

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
person1.age = person1.age || 0;
// person1.age = person1.age === undefined ? 0 : person1.age;
console.log(person1);
console.log(person1.age);
console.log("hasInsurance" in person1);

console.log(Object.keys(person1));
console.log(Object.values(person1));
console.log(Object.entries(person1));

console.log('================');
for (const [key, value] of Object.entries(person1)) {
	// const key = entry[0];
	// const value = entry[1];
	console.log(`${key} = ${value} (${typeof value})`);
}

console.log('================');
for (const key in person1) {
	const value = person1[key];
	console.log(`${key} = ${value} (${typeof value})`);
}

console.log(person1.getFullName('PERSON'));
console.log(person1.getFullName('>>>'));

function getFullName1(obj) {
	console.log('111', this);
	return `${obj.firstName} ${obj.lastName}`;
}

const getFullName2 = (obj) => {
	console.log('222', this);
	return `${obj.firstName} ${obj.lastName}`;
}


// console.log(getFullName1(person1));
// console.log(getFullName2(person1));
// person1.setCourse(999);
// person1.course = 998;
person1.reset();
console.log(person1);

// Account Number
