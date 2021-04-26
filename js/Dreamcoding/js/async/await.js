// async & await
// clear style of using promise :)

// 1. async
async function fetchUser() {
    return 'ellie';
} // function 앞에 async를 넣으면 code block이 바로 promise로 바뀜

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await ✨
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(2000); //delay 라는 함수가 끝날때까지 기다려줌
    // throw error = new Error('no apple');
    return '🍎';
}

async function getBanana() {
    await delay(500);
    return '🍌';
}

function pickFruits() {
    return getApple().then(apple => {
        return getBanana().then(banana => `${apple} + ${banana}`);
    })
}

async function pickFruits2() {
    // try {
        const apple = await getApple(); //inefficient 각각의 코드는 연관이 없기 때문
        const banana = await getBanana();
        return `${apple} + ${banana}`;
    // } catch { //error handling
    //     ;
    // }
}

async function pickFruits3() {
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise; //병렬적으로 동시에 기다렸다 출력 but 더러움
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
}

// pickFruits().then(console.log)
// .catch(console.log);
// pickFruits2().then(console.log)
// .catch(console.log);

pickFruits3()
    .then(console.log);

// 3. Useful Promise APIs
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + '));
}

pickAllFruits().then(console.log);

function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);