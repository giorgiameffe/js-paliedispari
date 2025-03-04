
// utente inserisce la scelta 'pari' o 'dispari'

const chooseEvenOrOdd = prompt("Scegli pari o dispari");
console.log(chooseEvenOrOdd);

// condizione di validità  

const isWordValid = chooseEvenOrOdd === 'pari' || chooseEvenOrOdd === 'dispari';


if (isWordValid) {
    
    const uNumber = parseInt(prompt("Scegli un numero da 1 a 5"));
    console.log(uNumber);

    // condizione di validità

    const isNumberValid = uNumber >=1 && uNumber <= 5;

    if (isNumberValid) {

        const cpNumber = randomNumber(1,5);
        console.log(cpNumber);
        
        function randomNumber (min,max) {

            // generare numero randomico per il computer compreso tra 1 e 5
            
            return Math.floor(Math.random()* (max - min + 1) + min);
        }
        
        // vengono sommati il numero dell'utente con il numero del computer
    
        const sumTwoNumbers = uNumber + cpNumber;
        console.log(sumTwoNumbers);
        
        function evenOrOdd (firstNumber, secondNumber) {

            // dichiarare il vincitore
            
            if (firstNumber % 2 === 0 && secondNumber % 2 === 0 || firstNumber % 2 !== 0 && secondNumber % 2 !==0) {
            
            return 'Ho vinto, il computer ha perso!';
        
        } 
        
        return 'Ho perso, ha vinto il computer!';
    
        }
        
        console.log(evenOrOdd(sumTwoNumbers, uNumber));

    } else {

        console.log ('Il numero deve essere compreso tra 1 e 5!');
    }

} else {

    console.log('La parola inserita non è valida')
}




// vengono sommati il numero dell'utente con il numero del computer