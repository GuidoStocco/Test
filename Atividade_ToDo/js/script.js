const listElement = document.querySelector("#app ul");
const inputElement = document.querySelector("#app input");
const btnElement = document.querySelector("#btn");

//
let tarefas = JSON.parse(localStorage.getItem("@Localtarefas")) || [];

function renderTarefas() {
    listElement.innerHTML = '';

    tarefas.map((tarefa) => {
        let liElement = document.createElement("li");
        let tarefaText = document.createTextNode(tarefa)

        let linkElement = document.createElement("a");
        linkElement.setAttribute("href", "#")

        let linkText = document.createTextNode("Excluir")
        linkElement.appendChild(linkText);

        let posicao = tarefas.indexOf(tarefa);

        linkElement.addEventListener("click", () => {
            deletarTarefa(posicao);
        })

        liElement.appendChild(tarefaText)
        liElement.appendChild(linkElement);
        listElement.appendChild(liElement);


    })
}

renderTarefas();



function adicionarTarefa(){

    if(!inputElement.value){
        alert("digite uma tarefa")
        return false;
    }else{
        let novaTarefa = inputElement.value;

        tarefas.push(novaTarefa);
        inputElement.value = ''

        renderTarefas();
        salvarDados()
    }

}


//deletar tarefa
function deletarTarefa(posicao) {
    tarefas.splice(posicao, 1)
    renderTarefas();
    salvarDados()
}


function salvarDados() {
    localStorage.setItem("@LocalTarefas", JSON.stringify(tarefas))
}





//eventos
btnElement.addEventListener("click", () => {
    adicionarTarefa();
})

