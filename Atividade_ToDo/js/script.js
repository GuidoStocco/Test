const listElement = document.querySelector("#app ul");
const inputElement = document.querySelector("#app input");
const btnElement = document.querySelector("#btn");

//
let tarefas = [];

function adicionarTarefa(){

    if(!inputElement.value){
        alert("digite uma tarefa")
        return false;
    }else{
        console.log(inputElement.value)
    }

}



//eventos
btnElement.addEventListener("click", () => {
    adicionarTarefa();
})