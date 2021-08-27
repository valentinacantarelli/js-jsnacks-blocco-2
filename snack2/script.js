// Inserisci un numero, se è pari stampa il numero,
// se è dispari stampa il numero successivo

var numeroUtente = parseInt(prompt("Ciao,inserisci un numero"));


if (numeroUtente % 2 == 0) {
    
    alert(numeroUtente);
} else  {

    alert(numeroUtente + 1);
}
