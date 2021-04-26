//  1. String concatenation
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

// 2. Numeric ooperators
console.log(1 + 1); //add
console.log(1 - 1); //substract
console.log(1 / 1); //divide
console.log(1 * 1); //multiply
console.log(5 % 2); //remainder
console.log(2**3) //exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter; //3
// counter = counter + 1;
// preIncrement = counter; // 3
console.log(`value: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++; //3
//postIncrement = counter;
//counter = counter + 1; //4
console.log(`value: ${postIncrement}, counter: ${counter}`);
const preDecement = --counter; //3
// counter = counter - 1;
//preDecement = counter; //3
console.log(`value: ${preDecement}, counter: ${counter}`);
const postDecement = counter--; //3
//postDecement = counter;
//counter = counter - 1; //2
console.log(`value: ${postDecement}, counter: ${counter}`);

//4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y; // x = x - y;
x *= y; // x = x * y;
x /= y; // x = x / y;


//5. Comparison operators
console.log(10 < 6); //less than
console.log(10 <= 6); //less than or equal to
console.log(10 > 6); //greater than
console.log(10 >= 6); //greater than or equal to

//6. Logical operators: || (or), && (and), !(not)
const value1 = false;
const value2 = 4 < 2;

// || (or), finds the first truthy value
//place expression/func that requires complicated computation to the back
console.log(`or: ${value1 || value2 || check()}`);

//&& (and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`);

//often used to compress long if-statement
//nullableObjects && nullableObject.something
// if (nullableObject != null) {
//     nullableObject.something;
// } -> checking null or not

function check(){
    for (let i = 0; i  < 10; i++){
        //wasting time
        console.log('😒');
    }
    return true;
}

//! (not)
console.log(!value1);

//7. Equality
const stringFive = '5';
const numberFive = 5;
//== loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);
// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);


//****!!!!! Object equality by reference
const ellie1 = { name: 'ellie'};
const ellie2 = { name: 'ellie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);

//10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type check in TS

const browser = 'IE';
switch (browser) {
    case 'IE' :
        console.log('go away!');
        break;
    case 'Chrome' :
    case 'Firefox' :
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}

// 11. Loops
//while loopm while the condition is truthy
//body code is executed
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first, 
// then check the condition.
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}

for(let i = 3; i  > 0; i -= 2) {
    // inline variable declaration
    console.log(`inline variable for: ${i}`);
}

// nested loops
for(let i = 0; i  < 10; i++) {
    for(let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}
// cpu에 좋지 않음

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
for (i = 0; i < 11; i++) {
    if (i % 2 === 1) continue;
    else {
        console.log(i);
    }
}

// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for (i = 0; i < 11; i++) {
    switch (i) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
            console.log(i);
            break;
        default:
            break;
    }
}