// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una
// lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

var nomi = ["Olivia","Emma","Amelia"];
var cognomi = ["Smith", "Taylor","Wilson"];
var invitati=[];
console.log(nomi);
console.log(cognomi);


for ( var i= 1; i<=3;i++){
    var nomeRandom = Math.floor(Math.random() * nomi.length);
    var cognomeRandom = Math.floor(Math.random() * cognomi.length);
    var nomeCompleto = nomi[nomeRandom] + " " + cognomi[cognomeRandom];
    invitati.push(nomeCompleto);
}
console.log(invitati);
