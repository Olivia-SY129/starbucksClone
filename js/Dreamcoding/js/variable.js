// 1. Use strict
// added in ES5
// use this for Valina Javascript/
'use strict';

// 2. variable, rw(read/write)
// let (added in ES6)
let globalName = 'global name';
{
let name = 'ellie';
console.log(name);
name = 'name';
console.log(name);
}
console.log(name);
console.log(globalName);

// 3. constant, r(read only)
// use const whenever possible
// only use let if variable needs to change
const daysInWeek = 7;
const MaxNumber = 5;

// Note!
// Immutable data types: primitive types, frozen objects(i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons;
//  -security
//  -thread safety
//  -reduce human mistake

// 4. variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function

const count = 17; //integer
const size = 17.1;  // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

//number - speicla numeric values: infinity, -infinity, Not a Number
// 현업에서도 해당 값이 valid 한지 확인 후  계산해야함, 에러의 원인이 
// 될 수 있음.
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);


//bigInt (fairly new, don't use it yet)
const bigInt = 12345678901234567890123456789012345678890n;
// over (-2**53 ~ 2*53)
console.log(`vlaue: ${bigInt}, type: ${typeof bigInt}`);

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' +brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x = undefined; //or let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); //false
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id'); 
console.log(gSymbol1 === gSymbol2); //true
// console.log(`value: ${symbol1}, type: ${typeof symbol1}`);  //error
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life object, data structure
const ellie = {name: 'ellie', age: 20}; // constant ellie cannot be chaged
ellie.age = 21; //chage the age 

// 5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0));
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
// console.log(text.charAt(0)); //error, string X -> number


