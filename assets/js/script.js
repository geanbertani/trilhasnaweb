// Variáveis e tipos de dados

let slogan = 'Venha trilhar conosco';
let idade = 33;  // number
let verdade = true; // boolean
let falso = false; // boolean
let array = [1, 2, 3, 4, 5, 'Trilhas na Web']; // array
let cores = ['vermelho', 'verde', 'azul']; // array
let nulo = null;
let carro = {
    foto: 'uploads/veiculos/2026/01/volkswagen-gol-1-0.jpeg',
    marca: 'BMW',
    modelo: 'X5',
    km: 33000,
    cor: 'preta',
    vendido: false,
}

// let nome = 'Trilhas na Web'; // string
// nome = 'Avançado';
// alert(nome);

// const VEICULO = 'volkswagen gol';
// alert(VEICULO);
alert('Carro não vendido, cor: ' + carro.cor);

if (carro.vendido) {
    carro.cor = 'branca';
} else {
    carro.cor = 'azul';
}

alert('Carro vendido, cor: ' + carro.cor);