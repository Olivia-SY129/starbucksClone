// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task ro calculates a value

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);

}
showMessage('Hi');

// 4. Rest parameters (added in ES6)
function printAll(...args) {
    for(let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    for(const arg of args) {
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie');

// 5. Local scope
let globalMessage = 'global'; //global variable
function printMessage() {
    let message = 'hello'; 
    console.log(message); // local variable
    console.log(globalMessage);
}

printMessage();

// 6. return undefined
// 7. Early return, early exit
// bad
function upgradeUser(user) {
    if(user.point > 10) {
        // long upgrade logic...
    }
}

// good
function upgradeUser(user) {
    if(user.point <= 10) {
        return;
    }
    // long upgrade logic...
}

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returend by another function

// 1. Function expression
// a function declaration can be called ealier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.
const print = function( ){  //anonymous function
    console.log('print');
}
print();
const printAgain = print;
printAgain();
function sum (a, b) {
    return a + b;
}
const sumAgain = sum;
console.log(sumAgain(1, 3))

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    if(answer === 'love you') {
        printYes();
    } else{
        printNo();
    }
}

// anonymous function
const printYes = function() {
    console.log('yes!');
};
// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print () {
    console.log('no!');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);


// Arrow function
// Always anonymous
// const simplePrint = function() {
//     console.log('simplePrint!');
// };

const simplePrint = () => console.log('simplePrint!');
simplePrint();

const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
    // do sth more
    return a * b;
}
const result1 = add(1, 2);
const result2 = simpleMultiply(1, 2);
console.log(result1, result2);

// IIFE: Immediately Invoked Function Expression
(function hello() {
    console.log('IIFE')
})();

// Fun quiz time💖
// function calculate (command, a, b)
// command: add1, substract, divide, multiply, remainder

function calculate (command, a, b) {
    switch(command) {
        case 'add':
            return a + b;
        case 'substract':
            return a - b;
        case 'divide':
            return a / b;
        case 'multiply':
            return a * b;
        case 'remainder':
            return a % b;
    }
}

const addResult = calculate('add', 1, 2);
console.log(addResult);