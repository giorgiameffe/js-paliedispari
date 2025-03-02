// chiedere all'utente di inserire una parola

const yourWord = prompt('Inserisci una parola');
console.log(yourWord);

// creare una funzione per capire se la parola inserita è palindroma

function isPalindromeWord (word) {
    
    let reversedWord = '';
    
    for (let i = word.length -1; i >=0; i--) {

        reversedWord = reversedWord + word[i];
    }

    // True o false
    
    return reversedWord === yourWord;

    }
    
console.log(isPalindromeWord(yourWord));