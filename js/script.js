// //PALINDROMA

// //chiedo all'utente di inserire una parola
// const word = prompt("Inserire una parola");
// console.log(word);

// function reversedWord(text) {
//   //converto la stringa in un array
//   const palindromeWord = text.split("").reverse().join("");

//   //verifico se la parola è palindroma
//   if (text === palindromeWord) {
//     return `La parola "${text}" è palindroma`;
//   } else {
//     return `La parola "${text}" NON è palindroma`;
//   }
// }

// //stampo il risultato
// console.log(reversedWord(word));

// //chiedo all'utente di inserire una parola
// const word = prompt("Inserire una parola");
// console.log(word);

// function reversedWord(text) {
//   //definizione variabile
//   let palindromeWord = ``;

//   //ciclo per invertire parola
//   for (let i = text.length - 1; i >= 0; i--) {
//     palindromeWord += text[i];
//   }

//   //verifico se la parola è palindroma
//   if (text === palindromeWord) {
//     return `La parola "${text}" è palindroma`;
//   } else {
//     return `La parola "${text}" NON è palindroma`;
//   }
// }

// //stampo il risultato
// console.log(reversedWord(word));

//PARI E DISPARI
//inserisco o pari o dispari
//dichiaro le variabili
let even = `pari`;
let odd = `dispari`;
//chiedo all'utente di scegliere tra pari o dispari
let userChoice = prompt(`Scegli tra pari e dispari`);
//definisco il risultato
let result;
//controllo che il testo inserito dall'utente sia valido
if (userChoice === `pari`) {
  result = even;
} else if (userChoice === `dispari`) {
  result = odd;
} else {
  result = `Scelta non valida`;
}
//stampo il risultato
console.log(`Hai scelto ` + result);

//inserire un numero tra 1 e 5
//chiedo all'utente di inserire un numero
const userNumber = prompt(`Inserisci un numero tra 1 e 5`);
//converto userNumber in un numero
let number = parseInt(userNumber);
//controllo che il numero inserito dall'utente sia valido
if (number < 1 || number > 5) {
  console.log(`Errore: inserisci un numero tra 1 e 5`);
} else {
  console.log(`Hai inserito il numero: ${number}`);
}

//generare un numero random tramite funzione compreso tra 1 e 5
const pcNumber = Math.floor(Math.random() * 5) + 1;

//faccio la somma dei due numeri
//definisco la funzione della somma
function sum (userNumber, pcNumber) {
  console.log(`${userNumber + pcNumber}`);
}

//controllo se la somma è pari o dispari


//se ho scritto pari ed è pari ho vinto
//se ho scelto dispari ed è dispari ho vinto
//se invece ho inserito pari e la somma è dispari ho perso
//se la ho inserito dispari e la somma è pari ho perso

//fare due funzioni:
//funzione 1: funzione che genera il numero random
//funzione 2: funzione che stabilisce se la somma dei due numeri è pari o dispari
