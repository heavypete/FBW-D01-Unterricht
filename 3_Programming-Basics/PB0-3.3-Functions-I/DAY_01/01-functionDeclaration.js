// "use strict";
// Functions are the main “building blocks” of the program. They allow the code to be called many times without repetition.

// To create a function we can use a function declaration.
// Syntax:
// function name() {
//     body of the function
// }


// 1.
function printMessage() {
    console.log("This is a function!");
};

// call function printMessage.
printMessage(); // This is a function!

// purpose of functions: avoid duplication
printMessage();


// ---------##---------
// 2.
// The function has full access to the outer variable. It can modify it as well.

let userName = "John";

function showMessage2() {
    const userName = "Bob";
    let message = `Hello ${userName}`;
    console.log(message);
}
console.log('outside 1: ' + userName);

showMessage2();     // Hello Bob

// If a same-named variable is assigned inside the function then it changes the value of the outer one. For instance, in the code below the function uses the local userName. 
console.log('outside 2: ' + userName); // Bob
// console.log(message);   // ReferenceError: message is not defined

// 3.
// But a variable DECLARED inside a function is only visible inside that function.

//let userName2 = "Jane";   

function printHello() {
    userName2 = "Doe";      
    let message = `Hello ${userName2}`;
    console.log(message); 
}
// let userName2 = "Doe";      // SyntaxError: Identifier 'userName2' has already been declared
printHello();               // Hello Doe
console.log(userName2);     // Jane

// better: getLogStatusBeforeReportIsPrinted() 
// worse: getReportLog()

// ---------##---------
// A word on naming functions:
// Functions are actions. So their name is usually a verb. It should be brief, as accurate as possible and describe what the function does, so that someone reading the code gets an indication of what the function does.

// For instance, functions that start with "show" usually show something.

// Function starting with…

// "get…" – return a value,
// "calc…" – calculate something,
// "create…" – create something,
// "check…" – check something and return a boolean, etc.