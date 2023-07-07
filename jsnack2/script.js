//array numeri random

const listaNumeri = [];
let somma = 0;


for (let i = 0; i < 30; i++) {
    const numero = Math.floor(Math.random() * 100) + 1;
    
    if (i % 2 !== 0) {
        somma += numero;
    }

    listaNumeri.push(numero);
}

console.log(listaNumeri);
console.log(somma);
