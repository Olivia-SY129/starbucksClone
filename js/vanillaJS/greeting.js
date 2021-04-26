const greetingForm = document.querySelector(".js-greetingForm"),
    input = document.querySelector('input'),
    greeting = document.querySelector('.js-greeting');

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function printName(text){
    greetingForm.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello, ${text}!`
}

function handleSubmit(){
    event.preventDefault();
    const currentValue = input.value;
    saveName(currentValue);
    printName(currentValue);

}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        greetingForm.classList.add(SHOWING_CN);
        greetingForm.addEventListener("submit", handleSubmit);
    }else{
        printName(currentUser);
    }
}

function init(){
    loadName();
}

init();