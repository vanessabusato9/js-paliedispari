//Prendere la parola
//Girarla al contrario
let input = prompt("Inserisci una parola");
let inputReverse = "";

inputReverse = input.split("").reverse().join("");
console.log(inputReverse);