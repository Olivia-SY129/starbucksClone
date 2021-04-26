'ust strict';

const arr = ['a', 'b', 'c'];
const eArr = arr[Symbol.iterator]();
const letterResult = document.getElementById('letterResult');

console.log(eArr);

// What is wrong with you????

// for (let letter of eArr) {
//     const li = document.createElement('LI');
//     li.textContent = letter;
//     letterResult.appendChild(li);
// }

// ????????????????????????