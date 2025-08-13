//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaAmigos = [];

function adicionarAmigo() {
    let nomeDigitado = document.getElementById('amigo').value;

    if (nomeDigitado !== '') { 
        listaAmigos.push(nomeDigitado); 
        inserirNomeNaTela(nomeDigitado); 
        document.getElementById('amigo').value = ''; 
    } else {
        alert('Digite os nomes a serem sorteados');
    }
}

// Aparecer lista na tela 
function inserirNomeNaTela(nome) {
    let lista = document.getElementById('listaAmigos'); 
    let item = document.createElement('li'); 
    item.textContent = nome; 
    lista.appendChild(item); 
}


// Botão Sortear os nomes aleatoriamente

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        document.getElementById('resultado').innerHTML = "Adicione os nomes antes de sortear.";
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
    let nomeSorteado = listaAmigos[indiceSorteado]; 

    document.getElementById('resultado').innerHTML = `Parabéns! O nome sorteado é: <strong>${nomeSorteado}</strong>`;
}

