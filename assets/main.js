/*

Consegna:
Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.

MILESTONE 1
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un'immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.

MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.

MILESTONE 3
Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.


BONUS 1:
Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.


BONUS 2:
Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, come nello screenshot proposto. Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato.
Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.
Prima di partire a scrivere codice:
Non lasciamoci spaventare dalla complessità apparente dell'esercizio, ma analizziamo prima, come abbiamo fatto sempre, cosa ci potrebbe aspettare. Abbiamo completato ormai da qualche giorno la sessione HTML e CSS, se non ci ricordiamo qualcosa andiamo pure a riguardare alcuni argomenti. Non dedichiamo però al ripasso più di una mezz'ora, così da non perdere di vista il focus dell'esercizio.
Consigli del giorno:
1. Costruiamo del carosello una versione statica contenente solamente un'immagine. Di questa versione statica al momento opportuno commenteremo (oscureremo) alcuni elementi per poterli riprodurre dinamicamente in js. Potremo quindi usarli come "template".
2. Scriviamo sempre prima per punti il nostro algoritmo in italiano per capire cosa vogliamo fare
3. Al momento giusto (ihihhi starà a voi capire quale) rispondete a questa domanda: "Quanti cicli servono?"

*/

let array = [
   
   "assets/img/01.webp",
   "assets/img/02.webp",
   "assets/img/03.webp",
   "assets/img/04.webp",
   "assets/img/05.webp"
   
   
]

let container = document.querySelector(`.container2`);

// console.log(array)
for(i=0; i <= array.length - 1; i++){
    // METODO MATTIA
    let img = document.createElement(`div`);
    img.id = 'img' + i;
    img.classList.add("item");
    img.innerHTML = `<img src='${array[i]}'>`

    // let img = document.createElement(`div`)

    // img.innerHTML = `<img src='${array[i]}''>`


    // if(i == 0){
    //     img.className = `item first active`
    // }else{
    //     img.className = `item`
    // }

    container.append(img)
}
//METODO MATTIA
document.getElementById('img0').classList.add("active");
document.getElementById('img0').classList.add("first");
document.getElementById('img4').classList.add("last")


let prev = document.querySelector(`.prev`)
let next = document.querySelector(`.next`)





next.addEventListener(`click`, function(){
    //seleziono la prima immagine
    let primaImg = document.querySelector('.active')
    console.log(primaImg)

    let scorriImg = primaImg.nextElementSibling
    console.log(scorriImg)

    if(primaImg.classList.contains(`last`)){
        scorriImg = document.querySelector(`.first`)
    }

    //tolgo la classe "active"
    primaImg.classList.remove("active")
    //aggingo la classe "active" all'elemento successivo
    scorriImg.classList.add("active")
})