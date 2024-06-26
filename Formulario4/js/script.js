
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

//     if(!regexCep.test(cep)){
//         alert("coloque um cep válido")
//     }
// }

//  validarCep();

// formTest.addEventListener("focusout", async () => {

//     try {
//         const cep = cepInput.value;
//         const regexCep = /^[0-9]{8}$/;

//         if(!regexCep.test(cep.value)){
//             throw new Error("cep Invalid")
//         }
            
    
//         axios.get(`https://viacep.com.br/ws/${cep}/json/`)
//         .then((response) => {
//             const {data} = response;
//             streetInput.value = data.logradouro;
//             bairroInput.value = data.bairro;
//             cityInput.value = data.localidade;
//         })

//     } catch (error) {
//         alert(error)
//     }
// })

   
formTest.addEventListener("focusout", () => {
    
    const cep = cepInput.value;
    axios.get(`https://viacep.com.br/ws/${cep}/json/`)
            .then((response) => {
                const {data} = response;
                streetInput.value = data.logradouro;
                bairroInput.value = data.bairro;
                cityInput.value = data.localidade;       
     })
})
