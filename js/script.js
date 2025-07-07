//Palindroma

//chiedo all'utente di inserire una parola
const word = prompt(`Inserire una parola`);
console.log(word);

function reversedWord(text) {
  //converto la stringa in un array
  palindromeWord = text.split("").reverse();
  console.log(palindromeWord);
}
