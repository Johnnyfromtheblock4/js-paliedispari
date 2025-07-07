//Palindroma

//chiedo all'utente di inserire una parola
const word = prompt(`Inserire una parola`);
console.log(word);

function reverseWord(text) {
  //converto la stringa in un array
  palindromeWord = text.split("").reverse();

  //verifico se la parola è palindroma
  if (text === palindromeWord) {
    console.log(`La parola ${text} è palindroma`);
  } else {
    console.log(`La parola ${text} NON è palindroma`);
  }
}

//stampo il risultato
console.log(reverse.Word(word));

