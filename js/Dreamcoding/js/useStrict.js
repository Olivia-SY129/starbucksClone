'use strict';

// Assignment to a non-writable global
var NaN = 'undefined'; //throws a TypeError

//Assignment to a non-writable property
var obj1 = {};
Object.defineProperty(obj1, 'x', {value: 41, writable: false});
obj1.x = 10 //throw a TypeError

//Assignment to a getter-only property
var obj2 = { get x() {return 10; }};
obj2.x = 5; //throws a TypeError

//Assignment to a new property on a non-extensible object
var fixed = {};
Object.preventExtensions(fixed);
fixed.newProp = 'hello'; //throws a TypeError