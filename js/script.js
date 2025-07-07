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

//chiedo all'utente di inserire una parola
const word = prompt("Inserire una parola");
console.log(word);

function reversedWord(text) {
  //definizione variabile
  let palindromeWord = ``;

  //ciclo per invertire parola
  for (let i = text.length - 1; i >= 0; i--) {
    palindromeWord += text[i];
  }

  //verifico se la parola è palindroma
  if (text === palindromeWord) {
    return `La parola "${text}" è palindroma`;
  } else {
    return `La parola "${text}" NON è palindroma`;
  }
}

//stampo il risultato
console.log(reversedWord(word));

//PARI E DISPARI
//inserisco o pari o dispari
let even = `pari`;
let odd = `dispari`;

let choice = prompt (`Scegli tra pari e dispari`)
//inserire un numero tra 1 e 5
//generare un numero random tramite funzione compreso tra 1 e 5
//faccio la somma dei due numeri
//controllo se la somma è pari o dispari
//se ho scritto pari ed è pari ho vinto 
//se ho scelto dispari ed è dispari ho vinto 
//se invece ho inserito pari e la somma è dispari ho perso 
//se la ho inserito dispari e la somma è pari ho perso


//fare due funzioni: 
//funzione 1: funzione che genera il numero random
//funzione 2: funzione che stabilisce se la somma dei due numeri è pari o dispari
