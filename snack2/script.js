// Inserisci un numero, se è pari stampa il numero,
// se è dispari stampa il numero successivo

var numeroUtente = parseInt(prompt("Ciao,inserisci un numero"));
var numeroPari;

if (numeroUtente % 2 == 0) {
    numeroPari=true;
    alert("Ecco il tuo numero" + " " + numeroUtente);
}else {
    alert("Ecco il tuo numero" numeroUtente+1);
}
console.log(numeroPari);