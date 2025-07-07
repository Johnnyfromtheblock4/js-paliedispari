//Palindroma

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
