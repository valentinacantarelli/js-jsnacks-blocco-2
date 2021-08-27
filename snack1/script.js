// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.

//for
var somma=0;
for(i=0; i<5;i++){
    var numeroUtente=parseInt(prompt("Ciao,inserisci un numero"));
    somma+=numeroUtente;
}
console.log(somma);


//while
var somma=0;
var i=0;
while(i<5){
    var numeroUtente=parseInt(prompt("Ciao,inserisci un numero"));
    somma+=numeroUtente;
    i++;
}
console.log(somma);