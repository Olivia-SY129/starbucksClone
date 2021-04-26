'use strict';

// Promise is a JavaScript object for asynchronous operation
// State: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically/immediately.
    // network 요청을 사용자가 하는 경우 -> 불필요한 통신 발생 **
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read files)
    console.log('doing sth...');
    setTimeout(() => {
        // resolve('ellie');
        reject(new Error('no network'));
    }, 2000);
});

// 2. Consumers: then, catch, finally
promise//
    .then((value) => { // value = 'ellie', resolve 값
        console.log(value); // then 호출 시 promise returned -> 그 안의 catch도 다시 호출
                            // chaining
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => console.log('finally')) // 성공/실패 여부와 상관 없이 호출됨

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) =>{
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
    .then (num => num * 2)
    .then (num => num * 3)
    .then (num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num-1), 1000);
        });
    })
    .then(num => console.log(num));

    // 4. Error Handling
const getHen = () => 
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('🐔'), 1000);
    });
const getEgg = hen =>
    new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error(`${hen} => 🥚`)), 1000);
    });
const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 🍳`))
    });

// getHen()
//     .then(hen => getEgg(hen))
//     // .then(getEgg) 으로 대체 가능 (한 value만 받아서 전달할 때)
//     .then(cook)
//     .then(console.log);

    // or
getHen() //
.then(getEgg)
.catch(error => {
    return '🌭';
})
.then(cook)
.then(console.log)
.catch(console.log);