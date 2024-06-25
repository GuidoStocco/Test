
// $('#formTest').submit(function (e) {
//     e.preventDefault();
//     const cep = cepInput.value;
//     axios.get(`https://viacep.com.br/ws/${cep}/json/`)
//         .then((response) => {
//             const { data } = response;
//             console.log(data);
//             $('#city').value = data.localidade
//         })
// })

// console.log(axios)

const formTest = document.querySelector("#formTest");
const cepInput = document.querySelector("#cep");
const streetInput = document.querySelector("#street");
const cityInput = document.querySelector("#city");
const bairroInput = document.querySelector("#neighborhood");


function validCep(){

    const cep = cepInput.value;
    const regexCep = /^[0-9]{8}$/;

    if(regexCep === cep){
        axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    }else{
        throw {cep_error: 'cep valid'};
    }
}

cepInput.addEventListener("focusout", () => {

    validCep();

})







    
