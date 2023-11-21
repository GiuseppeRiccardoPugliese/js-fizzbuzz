/*
Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz”, al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
*/

// definisco la mia variabile del contenitore nell'index
const container = document.querySelector(".container");

// devo far stampare i numeri da 1 a 100
for (i = 1; i <= 100; i++) {
    console.log(i);

    // per i multipli di 3 stampa "Fizz"
    if (i % 3 === 0) {
        let fizz = "Fizz";
        console.log(fizz);
        // i.innerHTML = "fizz"
    } if (i % 5 === 0) {
        let buzz = "Buzz";
        console.log(buzz);
    } if (i % 3 === 0 && i % 5 === 0) {
        let fizzBuzz = "FizzBuzz";
        console.log(fizzBuzz);
    }
}




// per i multipli di 5 stampo "Buzz"


// per i multipli di 3 e di 5 stampo "FizzBuzz"