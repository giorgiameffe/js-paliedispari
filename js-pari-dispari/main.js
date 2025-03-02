
// utente inserisce la scelta 'pari' o 'dispari'

const chooseEvenOrOdd = prompt("Scegli pari o dispari");
console.log(chooseEvenOrOdd);

// utente inserisce un numero da 1 a 5 in base alla scelta fatta in precedenza

const uNumber = parseInt(prompt("Scegli un numero da 1 a 5"));
console.log(uNumber);

// il computer genera un numero randomico da 1 a 5

const cpNumber = Math.floor(Math.random()*5) +1;
console.log(cpNumber);

// vengono sommati il numero dell'utente con il numero del computer

const sumTwoNumbers = uNumber + cpNumber;
console.log(sumTwoNumbers);


