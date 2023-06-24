// genero un array di 5 numeri casuali e li stampo in html

const numbers = [3 , 11 , 23 , 25 , 91];
console.log('numeri array' , numbers);

let printNumbers = document.querySelector('h1');
printNumbers.innerHTML = numbers[0] + ' ' + numbers[1] + ' ' + numbers[2] + ' ' + numbers[3] + ' ' + numbers[4];


setTimeout(hideNumbers , 10000);
 
function hideNumbers (){
    printNumbers.innerHTML = ' ';

}

// l'utente inserisce i numeri

setTimeout (aksNumers , 15000);

function aksNumers (){
    const userNumbers = [];
    let listNumbers;
    for(let i = 0 ; i < numbers.length ; i++){
        listNumbers = parseInt(prompt('inserisci in numeri che hai appena visto in ordine'));
        console.log('lista numeri inseriti utente' , listNumbers);

        userNumbers.push(listNumbers);
        
    }

    console.log('array numeri inseriti utente' , userNumbers);

    //confronto i numeri scritti dall'utente con quelli dell'array iniziale

    for(let j = 0 ; j < numbers.length ; j++){
        if(numbers[j] == userNumbers[j]){
            console.log('comlimenti hai indovinato tutti i numeri');
        }
        
        console.log('purtroppo hai sbagliato :/');
    }



}


