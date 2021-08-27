// Crea un array di numeri interi
// e fai la somma di tutti gli elementi che sono in posizione (indice dell'array) dispari

var numeri =[20, 17, 2688, 2552, 1147, 94, 39];
var numeriPosizioneDispari=[];
var somma=0;

for (var i =0; i<numeri.length; i++ ){
    if(i %2 == 1){
        numeriPosizioneDispari.push(numeri[i]);
        somma+=numeriPosizioneDispari;
    }
}
console.log(numeriPosizioneDispari);


console.log(somma);