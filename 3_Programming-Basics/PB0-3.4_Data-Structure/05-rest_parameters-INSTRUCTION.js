const sep = () => console.log('-'.repeat(30));
sep();

// ========================================================
// COMBINE AN ARRAY INTO ANOTHER ARRAY WITH SPREAD OPERATOR
// ========================================================

let allTemperatures = [23, 24, 24, 21, 19];
const thisWeekTemperatures = [16, 17, 15, 10, 11, 12, 12];
allTemperatures = [...allTemperatures, ...thisWeekTemperatures];
console.log(allTemperatures);
sep();

// ========================================================
// COMBINE TWO ARRAYS INTO A NEW ARRAY WITH SPREAD OPERATOR
// ========================================================

const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];
const allNumbers = [...numbers1, ...numbers2];
console.log(allNumbers);
sep();

// ==========================================================
// COMBINE TWO OBJECTS INTO A NEW OBJECT WITH SPREAD OPERATOR 
// ==========================================================

const baseEmployee = {
	firstName: null,
	lastName: null,
	age: null
};

const salesEmployee = {
	firstName: 'Pierluigi',
	monthlySalesAverage: null,
	subDepartment: null,
	attendingConference: null
};

const employee = { ...baseEmployee, ...salesEmployee };
console.log(employee);
sep();

// ===================================================
// ADD PROPERTY TO OBJECT WITH DOT NOTATION
// ===================================================

employee.accessPin = '1232';
employee.firstName = 'Giacomo';
console.log(employee);
sep();

// ===================================================================================
// A FUNCTION CAN BE CALLED WITH ANY NUMBER OF ARGUMENTS, NO MATTER HOW IT IS DEFINED
// ===================================================================================
// In typical JavaScript fashion, excessive arguments will not cause an error. 
// Only the first two numbers will be processed.

function sum(a, b) {
    return a + b;
}
console.log( sum(1, 2, 3, 4, 5) ); // 3
sep();


// ===================================================
// REST PARAMETERS 
// ===================================================
// Rest parameters are defined by three dots in the function parentheses.
// They mean to "get all of the rest of the parameters."

function sumAll2(...nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    // console.log(nums);  
    return sum;
}
console.log(sumAll2(1));                     // 1
console.log(sumAll2(1, 2));                  // 3
console.log(sumAll2(1, 2, 3));               // 6
console.log(sumAll2(1, 2, 5, 6, 2, 4, 5));   // 25
sep();


// ===================================================
// REST PARAMETERS AFTER REGULAR PARAMETERS
// ===================================================
// You can put regular parameters before rest parameters.
// The rest parameters will get the rest of the parameters, as the name implies.
// The rest parameters must be at the end

function showName(firstName, lastName, ...titles) {
    console.log( firstName + ' ' + lastName ); // Julius Caesar
    // the rest go into titles array
    // i.e. titles = ["Consul", "Imperator"]
    console.log( titles);            // [ 'Consul', 'Imperator' ]
    console.log( titles[0] );       // Consul
    console.log( titles[1] );       // Imperator
    console.log( titles.length );   // 2
}
showName("Julius", "Caesar", "Consul", "Imperator");
sep();


// ===================================================
// THE ARGUMENTS ARRAY IN CLASSIC FUNCTION SYNTAX 
// ===================================================
// ARGUMENTS VARIABLE
// There is also a special 'array-like object' named ARGUMENTS that contains all arguments by their index.
// Before ES6, rest parameters did not exist in the language, and using arguments was the only way to get all arguments of the function, no matter their total number.
// And it still works, we can use it today.

function showName() {
    console.log( arguments.length );
    console.log( arguments[0] );
    console.log( arguments[1] );
}
  
// shows: 2, Julius, Caesar
showName("Julius", "Caesar");  // argument length: 2
  
// shows: 1, Ilya, undefined (no second argument)
showName("Ilya"); // argument length: 1

// But the downside is that although arguments is both array-like and iterable, it’s not an array. It does not support array methods, so we can’t call arguments.map(...) for example.
// Also, it always contains all arguments. We can’t capture them partially, like we did with rest parameters.
// So when we need these features, then rest parameters are preferred.