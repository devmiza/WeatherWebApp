//document.addEventListener("DOMContentLoaded", function () {

const key = "ed16dd8fa83871fe17eded653e384d41"

function colocarDadosNaTela(dados) {
    console.log(dados)
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temperatura").innerHTML = Math.floor(dados.main.temp) + " °C"
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    document.querySelector(".umidade").innerHTML = "Umidade do ar: " + dados.main.humidity + "%"
}

async function buscarCidade(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())

    colocarDadosNaTela(dados)
}

function cliqueiNoBotao() {
    const cidade = document.querySelector(".input-cidade").value;
    const mensagemDeErro = document.querySelector(".mensagem-de-erro");

    if (cidade === "") {
        mensagemDeErro.innerHTML = "Campo de cidade vazio. Por favor, digite o nome da cidade.";
        mensagemDeErro.classList.add("mostrar");
    } else {
        mensagemDeErro.innerHTML = ""; // Limpando a mensagem de erro
        mensagemDeErro.classList.remove("mostrar");
        buscarCidade(cidade);
    }
}

function pressEnter(event) {
    if (event.keyCode === 13) {
        cliqueiNoBotao()
    }
}

    //const inputCidade = document.querySelector(".input-cidade");
    //inputCidade.addEventListener("keyup", pressEnter);

//})