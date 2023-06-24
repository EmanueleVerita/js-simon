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
    for(let i = 0 ; i < numbers.length ; i++){
        let userNumbers = parseInt(prompt('inserisci in numeri che hai appena visto in ordine'))
        console.log('i tuoi numeri inseriti sono: ' , userNumbers);
    }
}


