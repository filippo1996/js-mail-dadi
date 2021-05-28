/*
* Gioco dei dadi Generare un numero random da 1 a 6, 
* sia per il giocatore sia per il computer. 
* Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

//instaziamo le variabili dei numeri random
var numUser, numCpu;

//Dichiariamo il valore delle variabili con metodo random
numUser = Math.floor(Math.random() * 6) + 1;

numCpu = Math.floor(Math.random() * 6) + 1;

//algoritmo per scroprire chi ha fatto il punteggio più alto
var result = numCpu;
var message = 'Ha vinto il computer, con i dadi ha fatto ' + result + ' tu hai fatto ' + numUser;

if (numUser > numCpu){
    result = numUser;
    message = 'Hai vinto contro il computer, con i dadi hai fatto ' + result + ' il computer hai fatto ' + numCpu;
} else if (numUser === numCpu){
    message = 'Hai pareggiato contro il computer, con i dadi avete fatto ' + result;
}

//Element dom
eleMessage = document.getElementById('message');
eleCubo = document.getElementById('cubo');

//rotazione del cubo
var gradi = 0;
var animation = setInterval(e => {
    //gradi += 1;
    gradi = Math.floor(Math.random() * 360);
    eleCubo.style.transform = `rotateX(${gradi}deg) rotateY(${gradi}deg)`;
    eleMessage.innerHTML = 'Attendere mentre il sistema elabora la richiesta...';
},100);

//Impostiamo il tempo di attesa per l'elaborazione
setTimeout(e => {
    clearInterval(animation);
    //stampiamo il risultato a tutte le faccie del cubo
    for(var i = 0; i < eleCubo.children.length; i++){
        eleCubo.children[i].innerHTML = result;
        //console.log(eleCubo.children.length);
    }

    //restituiamo il messaggio del risultato
    eleMessage.innerHTML = message;
},5000);