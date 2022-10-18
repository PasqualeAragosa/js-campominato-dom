/* 
CONSEGNA

1 - Il computer generare 16 numeri casuali(le bombe) in base al range di difficoltà.
2 - Nella stessa cella può essere posizionata al massimo una bomba.
3 - In seguito l'utente clicca su una cella: 
4 - se il numero è presente nella lista 
        4.1 - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.
    Altrimenti 
        4.2 - la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.

5 - La partita termina quando il giocatore clicca su una bomba o quando ha rivelato tutte le celle che non sono bombe.
6 - Al termine il software deve comunicare il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
*/

//Funzioni
function getRandomNum(min, max, sizeArr) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//Agganciare gli array con tutti i numeri inseriti
//selezionare quelli che coincidono con l'array bombe
//renderli rossi

function getBoxesRed(arrayBombs, sizeArr) {
    const allBoxEl = document.querySelectorAll('.box');
    //console.log('allBoxEl: ', allBoxEl);
    //console.log('allBoxEl[9]: ', allBoxEl[9].textContent);
    for (let i = 0; i < sizeArr; i++) {
        //console.log('arrayBombs: ', arrayBombs);
        //console.log('allBoxEl[i]: ', allBoxEl[i].textContent);
        if (arrayBombs.includes(Number(allBoxEl[i].textContent))) {
            allBoxEl[i].classList.add('red');
        }
    }
}

//Seleziono il bottone
const buttonEl = document.querySelector('.my_btn');

buttonEl.addEventListener('click', function() {
    //Seleziono 'select'
    const selectEl = document.getElementById('lvl');
    //Acquisisco il valore del livello
    const sizeLvl = Number(selectEl.options[selectEl.selectedIndex].value);
    //Seleziono la griglia
    const gridEL = document.querySelector('.grid');
    //Aggiung0 un'istruzione per cui la griglia si resetti
    gridEL.innerHTML = '';
    //Inizializzo un contatore
    let current = 0;

    //Creo la dimensione dell'array di bombe
    const sizeBombs = 16;
    //Creo un array di bombe
    const bombs = [];

    while (bombs.length != sizeBombs) {
        const bomb = getRandomNum(1, sizeLvl);
        if (!bombs.includes(bomb)) {
            bombs.push(bomb);
        }
    }
    console.log('Array di bombe', bombs);

    for (let i = sizeLvl; i > 0; i--) {
        //Inserisco il markup di ogni box nel DOM
        gridEL.insertAdjacentHTML('afterbegin', `<div class="box">${i}</div>`);
        //Seleziono sempre il primo box appena inserito
        const boxEl = document.querySelector('.box');
        //Aggiungo la larghezza ad ogni box
        boxEl.style.width = `calc(100% / ${Math.sqrt(sizeLvl)})`;
        //Seleziono il numero di ogni box
        const num = Number(boxEl.textContent);
        //Aggiungo un toggle colorato
        boxEl.addEventListener('click', function() {
            boxEl.classList.add('lightblue');
            if (bombs.includes(num)) {
                boxEl.classList.add('red');
                getBoxesRed(bombs, sizeLvl);
            }
            current++;
            console.log(num);
        })
        
        //gridEL.innerHTML = `<h1>Hai totalizzato: ${current}</h1>`;
    }
});