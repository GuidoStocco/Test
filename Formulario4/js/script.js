
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

// function validarCep() {
//     const cep = cepInput.value;
//     const regexCep = /^[0-9]{8}$/;

//     if(regexCep.test(cep)){
//         return cep;
//     } else{
//         throw {Error_cep: 'Invalid'}
//     };
// }


const get = () => {

    const cep = cepInput.value;
    axios.get(`viacep.com.br/ws/${cep}/json/`)
        .then((response) => {
            console.log(response)
        })
 
}







    
