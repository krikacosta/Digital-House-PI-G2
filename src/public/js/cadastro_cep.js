// <script src="./assets/js/cadastro.js" defer></script> <!-- Incluir essa linha no html que tem o formulário -->

const inputCep = document.querySelector('#novoCep'); // substituir pelo id do seu formulário
const inputEstado = document.querySelector('#novoEstado'); // substituir pelo id do seu formulário
const inputCidade = document.querySelector('#novoCidade'); // substituir pelo id do seu formulário
const inputBairro = document.querySelector('#novoBairro'); // substituir pelo id do seu formulário
const inputRua = document.querySelector('#novoRua'); // substituir pelo id do seu formulário

const mensagemElement = document.getElementById("frete");

inputCep.addEventListener("blur", () => {
//   const nome = nomeInput.value;
  mensagemElement.textContent = `R$ 10,00 - 7 dias`;
});

inputCep.addEventListener('keypress', verficarTamanhoDoCep);
inputCep.addEventListener('blur', fetchData);

function verficarTamanhoDoCep(event) {
    console.log(event.target.value.length);
    if(event.target.value.length > 7) {
        event.preventDefault();
    }
}

async function fetchData() {
    const numero = inputCep.value;

    const response = await fetch(`https://brasilapi.com.br/api/cep/v2/${numero}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });

    const data = await response.json();
    
    const {city, neighborhood, state, street} = data;

    inputEstado.value = state;
    inputCidade.value = city;
    inputBairro.value = neighborhood;
    inputRua.value = street;
   
}







