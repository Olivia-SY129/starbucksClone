class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject) =>{
            setTimeout(() => {
                if (
                    (id === 'ellie' && password === 'dream') ||
                    (id === 'coder' && password === 'academy')
                ) {
                    resolve(id);
                } else {
                    reject(new Error('not found'));
                }
            }, 2000);
        })
        

    }

    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user === 'ellie') {
                resolve({name: 'ellie', role: 'admin'});
                } else {
                reject(new Error('no access'));
                }
            }, 1000);
        })
        
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your pw');
userStorage.loginUser(id, password)
    .catch((id) => {
        return {id: 'guest'};
    })
    .then(userStorage.getRoles)
    .catch(user => {
        return {name: user, role: 'member'};
    })
    .then((id) => {
        alert(`Hello ${id.name}, you have ${
            id.role === 'admin' ? `an ${id.role}` : `a ${id.role}`} role.`)
    })
    .catch(console.log);