/**
 * CRUD:
 * C: Create
 * R: Read
 * U: Update
 * D: Delete
 */

const entradaTarea = document.getElementById('entrada-tarea');
const lista = document.getElementById('lista')

entradaTarea.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        addTarea();
    }
});

function addTarea(){
    if(entradaTarea.value === ''){
        
    }else{
        let li = document.createElement('li');
        li.innerHTML = entradaTarea.value;
        lista.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    entradaTarea.value = "";
    saveData();
    entradaTarea.focus();
}

entradaTarea.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      addTarea();
    }
});

lista.addEventListener("click", function(a){
    if(a.target.tagName === 'LI'){
        a.target.classList.toggle("tachada");
        saveData();
    }
    else if(a.target.tagName === 'SPAN'){
        a.target.parentElement.remove();
        saveData();
    }
    entradaTarea.focus();
},false);

function saveData(){
    localStorage.setItem("data", lista.innerHTML);
}

function showTask(){
    lista.innerHTML = localStorage.getItem("data");
    entradaTarea.focus();
}

showTask();