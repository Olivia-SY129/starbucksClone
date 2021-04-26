const form = document.querySelector(".js-form-greeting");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greeting");

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text);
}
function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello, ${text}!`
}
function handleSumbit(){
    event.preventDefault();
    const currentValue = input.value;
    console.log(currentValue);
    saveName(currentValue);
    paintGreeting(currentValue);
}
function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSumbit);
}
function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName();
    }else{
        paintGreeting(currentUser);
    }
}
function init(){
    loadName();
}

init();