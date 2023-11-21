/*
Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz”, al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
*/

// definisco la mia variabile del contenitore nell'index
const container = document.querySelector(".container");


// devo far stampare i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {

    // creo il mio div generico dell'html
    const square = document.createElement("div");

    // aggiungo la classe "square" al mio div
    square.classList.add("square");

    // aggiungo il div con Append nel mio container
    container.append(square);

    if (i % 3 === 0 && i % 5 === 0) { // per i multipli di 3 e di 5 stampo "FizzBuzz"

        let fizzBuzz = "FizzBuzz";
        console.log(fizzBuzz);

        //attraverso Append "appendo" il contenuto al mio div
        square.append("FizzBuzz");

        //aggiungo la classe del colore al mio div
        square.classList.add("red");

    } else if (i % 5 === 0) { // per i multipli di 5 stampo "Buzz"

        let buzz = "Buzz";
        console.log(buzz);

        //attraverso Append "appendo" il contenuto al mio div
        square.append("Buzz");

        //aggiungo la classe del colore al mio div
        square.classList.add("yellow")

    } else if (i % 3 === 0) { // per i multipli di 3 stampa "Fizz"

        let fizz = "Fizz";
        console.log(fizz);

        //attraverso Append "appendo" il contenuto al mio div
        square.append("Fizz");

        //aggiungo la classe del colore al mio div
        square.classList.add("green")

    } else {

        console.log(i);

        //attraverso Append "appendo" il contenuto al mio div
        square.append(i);

    }

    /*
    BONUS 1:
    Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.
    
    BONUS 2:
    Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.    
    */


}







