// Variáveis e tipos de dados
let slogan = 'Venha trilhar conosco';
let idade = 33;  // number
let verdade = true; // boolean
let falso = false; // boolean
let array = [1, 2, 3, 4, 5, 'Trilhas na Web']; // array
let cores = ['verde', 'azul', 'pink', 'vermelho', 'violeta', 'preto']; // array
let nulo = null;
let carro = {
    foto: 'uploads/veiculos/2026/01/volkswagen-gol-1-0.jpeg',
    marca: 'BMW',
    modelo: 'X5',
    km: 33000,
    cor: 'preta',
    vendido: false,
}

// alert(array[0]);

// let nome = 'Trilhas na Web'; // string
// nome = 'Avançado';
// alert(nome);

// const VEICULO = 'volkswagen gol';
// alert(VEICULO);
// alert('Carro não vendido, cor: ' + carro.cor);

// if (carro.vendido) {
//     carro.cor = 'branca';
// } else {
//     carro.cor = 'azul';
// }

// alert('Carro vendido, cor: ' + carro.cor);


// Laços de repetição
let text = '';
for (let indice = 0; indice < 6; indice++) {
    text += `
        <h2>Indice: ${indice} - Cor: ${cores[indice]}</h2>
    `;      

    // i++ = 0+1
}
exibirResultados('hero', text);

text = `<h2>Length= ${cores.length}</h2>`;
exibirResultados('services', text);

text = `<h2>Trilhas na Web - ${slogan}</h2>`;
exibirResultados('footer', text);

// Funções
function soma(a, b) {
    return a + b;
}

text = `<h2>Resultado da soma: ${soma(2, 3)}</h2>`;
exibirResultados('about', text);

function exibirResultados(element, text) {
    const inject = document.getElementById(element);
    if (inject) {
        inject.innerHTML = text;        
    }
}

function enviarNome() {
    const nome = document.getElementById('input_name').value;
    if (nome) {
        text = `<h2 class="azul">Olá, ${nome}!</h2>`;
        exibirResultados('hero', text);
    } else {
        text = `<h2 class="vermelho">Por favor, digite seu nome.</h2>`;
        exibirResultados('hero', text);
    }
}