//Esercizio Pari_dispari 
//L'utente sceglie se puntare su un esito pari o dispari

//Dichiarazione di funzione
//Scegli funzione
//function scegliPuntata() {
    let puntata = prompt("Scegli se puntare su pari o su dispari");
    console.log(`L'utente ha scelto di puntare su: ${puntata}`);

    if ( puntata != "pari" && puntata != "dispari") {
    alert("Errore: dovevi scegliere tra pari e dispari. Ho scelto per te dispari");
    puntata = "dispari"; 
    }
    console.log(`L'utente ha scelto: ${puntata}`);

//Scegli numero 
    let numero = parseInt (prompt("Scegli un numero tra 1 e 10 compresi"));
    console.log(`L'utente ha scelto il numero ${numero}`);

    if ( numero < 0 || numero > 10 || isNaN("numero")) {
        alert("Errore: dovevi scegliere tra 1 e 10. Ho scelto io per te 5");
        numero = 5;
        console.log(`L'utente ha scelto il numero: ${numero}`);
    }

//Numero scelto dal computer 
    let computer = Math.floor (Math.random() *4 );
    console.log

//}