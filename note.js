console.log('test');

const persons = {
    firstName: 'Johnny',
    lastName: 'Walker',
    age: 8
};

console.log(Object.values(persons).filter(person => isNaN(person) && `${person.charAt(0).toLowerCase()}`)); //*charAt doesn't work with filter?
console.log(Object.values(persons).map(person => isNaN(person) && `${person.charAt(0).toLowerCase()}`));

