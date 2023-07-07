/* Snack1
Generatore di “nomi cognomi” casuali:
il Grande Gatsby ha una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.
*/

//array nomi

const listaNomi = ["Andrea","Mario","Giulia","Riccardo","Sofia","Paolo","Marco",
"Vittoria","Gianluca","Elisa","Chiara","Stefano"];

//array cognomi

const listaCognomi = ["Rossi","Ricci","Bianchi","Costa","Ferrari","Romano",
"Russo","Conti", "Gallo", "Fontana", "DeLuca", "Moretti"];

const arrayNomi = listaNomi.length;

for (let i = 0; i < 30; i++) {
    //genera ad ogni ciclo due numeri casuali
    let random1 = Math.floor(Math.random() * arrayNomi);
    let random2 = Math.floor(Math.random() * arrayNomi);
    let nome_random = listaNomi[random1]; //estrae nome casuale
    let cognome_random = listaCognomi[random2]; //estrae cognome casuale

    console.log(nome_random + " " + cognome_random);
}
 //