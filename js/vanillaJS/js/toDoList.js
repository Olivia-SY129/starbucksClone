const toDoForm = document.querySelector('.js-form-toDo'),
    toDoinput = toDoForm.querySelector("input"),
    toDoList = document.querySelector('.js-toDoList');

const TODOS_LS = "toDos";

const toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text){
    const li = document.createElement("li");
    const delbtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delbtn.innerText ='❌';
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delbtn);
    li.id = newId;
    toDoList.appendChild(li);

    const toDoObj= {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoinput.value;
    paintToDo(currentValue);
    toDoinput.value = "";
}

function loadToDos(){
        const laodedToDos = localStorage.getItem(TODOS_LS);
        if(laodedToDos !== null){
            const parsedToDos = JSON.parse(laodedToDos);
            parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
            console.log(toDo.text);
            });
        }
    }
    

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit)
}

init();