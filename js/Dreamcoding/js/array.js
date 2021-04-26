'use strict';

// Array ❤🧡

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
console.log('2 index position');
const fruits = ['🍏', '🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);

// 3. Looping over an array
// print all fruits
console.log('3. looping')
// a. for
console.log('for loop')
for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// b. for...of
console.log('for...of')
for(let value of fruits) {
    console.log(value)
}
// c. forEach
console.log('forEach API')
fruits.forEach(function(value, index, array) {
    console.log(value, index, array);
});
fruits.forEach(value => console.log(value));

// 4. Addition, deletion, copy
// push: add an item to the end
fruits.push('🍑', '🍓');
console.log(fruits)

// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift('🍒', '🍋');
console.log(fruits);

// shift: remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// pop과 push는 단순히 빈 index에 data를 넣고 빼는 것이지만
// shift, unshift는 다른 index의 data를 옮긴 후에 넣고 빼는 것
// as index of array is larger, those methods get slower.
// big O, 정렬 .......?

// splice: remove an item by index position
console.log('splice');
fruits.push('🍑', '🍓', '🍋');
console.log(fruits);
fruits.splice(2 ,2); // delete '🍑', '🍓' 
console.log(fruits); 
fruits.splice(1); // delete all after index 1
console.log(fruits);
fruits.push('🍑', '🍓', '🍋', '🍌', '🍍', '🥭');
console.log(fruits);
fruits.splice(1, 1, '🍓', '🍅');    // delete an item on the according index 
                                     // and add '🍓' and '🍅' on the posiiton.
console.log(fruits);

// combine two arrays
const fruits2 = ['🍐', '🥑', '🍉'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);
const newFruits2 = fruits.concat(fruits2[2]);
console.log(newFruits2);

// 5. Searching
console.clear();
console.log(fruits);

// indexOf : find the index
console.log(fruits.indexOf('🍓')); // 1
console.log(fruits.indexOf('🥪')); // -1

// includes: check if it includes a certain element
console.log(fruits.includes('🍌')); // true
console.log(fruits.includes('🥨')); // false

// lastIndexOf
console.log(fruits.lastIndexOf('🍓')); // 3



// Quiz: 

