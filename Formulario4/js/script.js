//Selecionando elementos


$('#formTest').submit(function (e) {
    e.preventDefault();
    const form = e.target;
    const cep = '29930425'; // TODO: fazer lógica de pegar do input
    axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        .then((response) => {
            const { data } = response;
            console.log(data);
            $('#city').value = data.localidade
        })
})