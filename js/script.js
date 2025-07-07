//PALINDROMA

//chiedo all'utente di inserire una parola
const word = prompt("Inserire una parola");
console.log(word);

function reversedWord(text) {
  //converto la stringa in un array
  const palindromeWord = text.split("").reverse().join("");

  //verifico se la parola è palindroma
  if (text === palindromeWord) {
    return `La parola "${text}" è palindroma`;
  } else {
    return `La parola "${text}" NON è palindroma`;
  }
}

//stampo il risultato
console.log(reversedWord(word));

//FOR PALINDROMA
//chiedo all'utente di inserire una parola
const parola = prompt("Inserire una parola");
console.log(parola);

function reversedParola(text) {
  //definizione variabile
  let palindromeParola = ``;

  //ciclo per invertire parola
  for (let i = text.length - 1; i >= 0; i--) {
    palindromeParola += text[i];
  }

  //verifico se la parola è palindroma
  if (text === palindromeParola) {
    return `La parola "${text}" è palindroma`;
  } else {
    return `La parola "${text}" NON è palindroma`;
  }
}

//stampo il risultato
console.log(reversedParola(parola));

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
console.log(`Hai scelto: ` + result);

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
console.log(`Numero del pc: ${pcNumber}`);

//faccio la somma dei due numeri
//definisco la funzione della somma
function sum(num1, num2) {
  return num1 + num2;
}
//calcolo la somma
const total = sum(number, pcNumber);
console.log(`Somma: ${total}`);

//controllo se la somma è pari o dispari
const isEven = total % 2 === 0;
const outcome = isEven ? `pari` : `dispari`;
console.log(`La somma è: ${outcome}`);

//calcolo il vincitore
if (outcome === result) {
  console.log(`Hai vinto!`);
} else {
  console.log(`Ha vinto il computer!`);
}
