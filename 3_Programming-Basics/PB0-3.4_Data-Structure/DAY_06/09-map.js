// ------------------------------------------- // // ------------------------------------------- //
// The map() method creates a new array with the results of calling a provided function on every element in the calling array.

// The arr.map method is one of the most useful and often used.
// It calls the function for each element of the array and returns the array of results.

// The syntax is:

// let result = arr.map(function(item, index, array) {
//   // returns the new value instead of item
// })

// When we need to iterate over an array – we can use forEach, for or for..of.
// When we need to iterate and return the data for each element – we can use map.

let aRr = [1, 2, 3, 4, 5];
let squareArr = aRr.map(num => num ** 2);

console.log(squareArr);          // [ 1, 4, 9, 16, 25 ]

// We wrote a function that returns the square of a number and passed that function as an argument to our map()

// ------------------------------ //

let numbers = [4, 9, 16, 25];

function mapMethod () {
    return numbers.map(Math.sqrt);
}

console.log(mapMethod());  // [ 2, 3, 4, 5 ]
console.log(numbers); // [ 4, 9, 16, 25 ]

// ------------------------------ //

let numArr2 = [1, 4, 9];

// 1.
let doubles = numArr2.map(function(num) {
    return num * 2;
})
console.log(doubles);   // [ 2, 8, 18 ]

// 2.
let doubles2 = numArr2.map(num => num * 2)

console.log(doubles2);       // [ 2, 8, 18 ]
console.log(numArr2);        // [ 1, 4, 9 ]


// ------------------------------ //

let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
console.log(lengths); // [ 5, 7, 6 ]

// ------------------------------ //

// The map() method creates a new array with the results of calling a function for every array element.

// The map() method calls the provided function once for each element in an array, in order.

// !!!map() does not execute the function for array elements without values.

// !!!map() does not change the original array.

// ------------------------------ //

// Using map to reformat objectParamects in an array

let newArray = [
    {key: 1, value: 10}, 
    {key: 2, value: 20}, 
    {key: 3, value: 30}
];

let reformattedArray = newArray.map(objectParam => { 
    let newObject = {};
    newObject[objectParam.key] = objectParam.value;
    return newObject;
});

console.log(reformattedArray);  // [ { '1': 10 }, { '2': 20 }, { '3': 30 } ]
console.log(newArray);          // [ { key: 1, value: 10 },
                                // { key: 2, value: 20 },
                                // { key: 3, value: 30 } ]


// ------------------------------ //

let anArr = "L 2 S 6 L 3 S 4".split(" ");

console.log(anArr); // [ 'L', '2', 'S', '6', 'L', '3', 'S', '4' ]

let newArr2 = anArr.map(item => {
    if ( item === "L" || item === "S" ) {
        return item;
    } else {
        return item * 2;
    }
}).join(" ")

console.log(newArr2);   // L 4 S 12 L 6 S 8