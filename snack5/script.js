// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.


var primaLista =[1, 2, 3, 4, 5, 6, 7, 8, 9];
var secondaLista=[88 ,37 ,96];

var numeriRandom=[345, 545,114,994,361,126];
var i=0;
 while(primaLista.length< secondaLista.length){
     primaLista.push(numeriRandom[i]);
     i++;

 }
 while( secondaLista.length<primaLista.length){
         secondaLista.push(numeriRandom[i]); 
     i++;
 }

 console.log(primaLista);
 console.log(secondaLista);
///////////////con math random
// var randomNumber;
//  while(primaLista.length< secondaLista.length){
//         randomNumber = Math.floor( Math.random() * 100);
//      primaLista.push(randomNumber);


// }
//  while( secondaLista.length<primaLista.length){
//     randomNumber = Math.floor( Math.random() * 100);
//        secondaLista.push(randomNumber); 

// }

// console.log(primaLista);
//  console.log(secondaLista);


///////con if
// if (primaLista.length< secondaLista.length){
//     while(primaLista.length != secondaLista.length){
//         primaLista.push(numeriRandom[i]);
//         i++; }   
    
// }else if(primaLista.length> secondaLista.length){
//     while( secondaLista.length!=primaLista.length){
//         secondaLista.push(numeriRandom[i]); 
//     i++;}
// }else{
//     console.log("le liste hanno la stessa lunghezza");
// }
// console.log(primaLista);
// console.log(secondaLista);