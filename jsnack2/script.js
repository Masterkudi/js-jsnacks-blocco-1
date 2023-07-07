//array numeri

const numeri = [42, 18, 7, 91, 56, 23, 65, 33, 100, 87, 39, 52, 76, 29, 14, 61, 97, 45, 3, 82];

let sum = 0;

for (let i = 0; i < numeri.length; i++) {
    
    if (i % 2 === 1) {
        sum += numeri[i];
    }
}

console.log (`La somma degli elementi dell'array in posizione 
dispari è ${sum}`);
