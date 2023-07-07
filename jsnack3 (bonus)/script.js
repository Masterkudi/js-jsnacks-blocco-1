/* Snack3 (Bonus)
Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro. */

const lista1 = [];
const lista2 = [];

for(let i = 0; i < 10; i++) {
    //numeri random tra 0 e 99
    lista1.push(Math.floor(Math.random() * 100));
}

for(let i = 0; i < 25; i++) {
    //numeri random tra 0 e 99
    lista2.push(Math.floor(Math.random() * 100));
}
//se la differenza è < 0, il primo è più piccolo, altrimenti lo è il secondo
const differenza = lista1.length - lista2.length;

console.log(lista1);
console.log(lista2);
console.log(differenza);

for(let i = 0; i < differenza; i++) {
    if(differenza < 0) {
        lista1.push(232);
    } else {
        lista2.push(232);
    }
}

while (Math.abs(differenza) > 0) {
    if (lista1.length < lista2.length) {
        lista1.push(232);
    } else {
        lista2.push(232);
    }
}

console.log(lista1);
console.log(lista2);
