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
    const btn = event.target;
    const li = btn.parentNode;
    const ul = li.parentNode;
    const dataArr = (ul.className === 'pendingList')? pendings : finished;
    
        // remove an target element and local storage data
        ul.removeChild(li);
        li.removeChild(btn);
        const index = parseInt(li.id);
        dataArr.splice(index, 1);

        // change ids of rest elements and local storage data
        const listsArr = [].slice.call(ul.getElementsByTagName('li'));
        
        listsArr.map((li) => {
            const id = parseInt(li.id);
            if(id > index) {
                return li.id--;
            }
        })

        dataArr.forEach((obj) => {
            if(obj.id > index) {
                return obj.id--;
            }
        })
        
        saveToPending();
        saveToFinished();
    
}

function moveToFin(event) {
    const text = event.target.parentNode.firstChild.innerText;
    removeList(event);
    addFinished(text);
}

function moveToPending(event) {
    const text = event.target.parentNode.firstChild.innerText;
    removeList(event);
    addTask(text);
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
    finishedList.appendChild(li);

    const finishedObj = {
        text: text,
        id: id,
    };
    finished.push(finishedObj);
    saveToFinished();

    // change status
    delbtn.addEventListener('click', removeList);
    pendingBtn.addEventListener('click', moveToPending);
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