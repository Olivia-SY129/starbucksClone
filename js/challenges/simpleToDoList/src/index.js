const toDoForm = document.querySelector('.toDoForm');
const toDoInput = toDoForm.querySelector('input');
const pendingList = document.querySelector('.pendingList');
const finishedList = document.querySelector('.finishedList');

const pendings = [];
const PENDING_LS = "Pending"

const finished = [];
const FINISHED_LS = "Finished"

function saveToPending() {
    localStorage.setItem(PENDING_LS, JSON.stringify(pendings));
}

function saveToFinished() {
    localStorage.setItem(FINISHED_LS, JSON.stringify(finished));
}

function removeList(event) {

}

function moveToFin(event) {

}

function addTask(text) {
    const li = document.createElement("li");
    const finBtn = document.createElement("button");
    const delbtn = document.createElement("button");
    const span = document.createElement("span");
    const id = pendings.length;
    
    finBtn.innerText = '✔';
    delbtn.innerText = '❌';
    span.innerText = text;
    li.id = id;

    li.appendChild(span);
    li.appendChild(finBtn);
    li.appendChild(delbtn);
    pendingList.appendChild(li);

    const pendingObj = {
        text: text,
        id: id,
    };
    pendings.push(pendingObj);
    saveToPending();

    // change status
    delbtn.addEventListener('click', removeList);
    finBtn.addEventListener('click', moveToFin);
}

function addFinished(text) {
    const li = document.createElement("li");
    const pendingBtn = document.createElement("button");
    const delbtn = document.createElement("button");
    const span = document.createElement("span");
    const id = finished.length;
    
    pendingBtn.innerText = '🔺';
    delbtn.innerText = '❌';
    span.innerText = text;
    li.id = id;

    li.appendChild(span);
    li.appendChild(pendingBtn);
    li.appendChild(delbtn);
    pendingList.appendChild(li);

    const finishedObj = {
        text: text,
        id: id,
    };
    finished.push(finishedObj);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    addTask(currentValue);
    toDoInput.value = "";
}

function loadToDos() {
    const laodedPendings = localStorage.getItem(PENDING_LS);
    const laodedFinished = localStorage.getItem(FINISHED_LS);
    
    if(laodedPendings !== null) {
        const parsedPendings = JSON.parse(laodedPendings);
        parsedPendings.forEach(function(pending) {
            addTask(pending.text);
        })
    }
    if (laodedFinished !== null) {
        const parsedFinished = JSON.parse(laodedFinished);
        parsedFinished.forEach(function(finished) {
            addFinished(finished.text);
        })
    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener('submit', handleSubmit);
}

init();