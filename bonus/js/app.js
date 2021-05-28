//variabili per scegliere il multiplo e da dove iniziare e finire
var multiple = 3;
var start = 10;
var end = 30;

//cicliamo tutti i multipli di 3 compresi tra 10 e 30
for(var i = start; i <= end; i++){
    if(i % multiple === 0){
        console.log(i);
        document.getElementById('multiples').innerHTML += '<h4>' + i + '</h4>';
    }
}