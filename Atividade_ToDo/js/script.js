const listElement = document.querySelector("#app ul");
const inputElement = document.querySelector("#app input");
const btnElement = document.querySelector("#btn");

//
let tarefas = [];

function renderTarefas() {
    listElement.innerHTML = '';

    tarefas.map((tarefa) => {
        let liElement = document.createElement("li");
        let tarefaText = document.createTextNode(tarefa)

        liElement.appendChild(tarefaText)

        listElement.appendChild(liElement);
    })
}



function adicionarTarefa(){

    if(!inputElement.value){
        alert("digite uma tarefa")
        return false;
    }else{
        let novaTarefa = inputElement.value;

        tarefas.push(novaTarefa);
        inputElement.value = ''

        renderTarefas();
    }

}



//eventos
btnElement.addEventListener("click", () => {
    adicionarTarefa();
})