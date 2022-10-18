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
function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
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

    //Creo la dimensione dell'array di bombe
    const sizeBombs = 16;
    //Creo un array di bombe
    const bombs = [];
    //Ciclo fino al completamento dell'array
    for (let i = 0; i < sizeBombs; i++) {
        //Genero un numero casuale
        let bomb = getRandomNum(1, sizeLvl);
        //Se l'array ha già un numero
        if (i > 0) {
            //Genero un numero casuale
            bomb = getRandomNum(1, sizeLvl);
            //
            let repetNum = false;
            for (let i = 0; i < bombs.length; i++) {
                if (bomb === bombs[i]) {
                    repetNum = true;
                }
            }
            if (repetNum === false) {
                bombs.push(bomb);
            }
            
        } else {
            //Inserisco il primo numero nell'arry vuoto
            bombs.push(bomb);
        }
    }
    console.log('Array di bombe', bombs);

    for (let i = sizeLvl; i > 0; i--) {
        //Inserisco il markup di ogni box nel DOM
        gridEL.insertAdjacentHTML('afterbegin', `<div class="box">${i}</div>`);

        const boxEl = document.querySelector('.box');
        boxEl.style.width = `calc(100% / ${Math.sqrt(sizeLvl)})`;
        const num = Number(boxEl.textContent);

        boxEl.addEventListener('click', function() {
            if (boxEl.style.backgroundColor === "lightblue") {
                boxEl.style.backgroundColor = "white";
            } else {
                boxEl.style.backgroundColor = "lightblue";
            }
            console.log(num);
        })

    }

});
