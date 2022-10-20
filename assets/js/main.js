//FUNZIONI
function insertNumGrid(size, divGrid) {
    for (let i = 0; i < size; i++) {
        const boxMarkup = `<div class="box box_${i + 1}">${i + 1}</div> `;
        divGrid.insertAdjacentHTML('beforeend', boxMarkup);
    };
}

function getNumBox(size) {
    const allBox = document.querySelectorAll('.box');
    let allNumBox = [];

    for (let i = 0; i < size; i++) {
        allNumBox.push(Number(allBox[i].textContent));
    }
    
    return allNumBox;
}

function giveWidthBox(size) {
    const allBox = document.querySelectorAll('.box');

    for (let i = 0; i < size; i++) {
        allBox[i].style.width = `calc(100% / ${Math.sqrt(size)})`;
    }
}

function getNumRand(size, max) {
    let allNum = [];

    while (allNum.length !== size) {
        const num = Math.floor((Math.random() * max) + 1);

        if (allNum.length < 1) {
            allNum.push(num);
        } else if (!allNum.includes(num)) {
            allNum.push(num);
        }
    }

    return allNum;
}

//Crea funzione che rende tutti rossi

const buttonEl = document.querySelector('.my_btn');

buttonEl.addEventListener('click', function() {
    
    //VARIABILI
    const gridEl = document.querySelector('.grid');
    const selectEl = document.getElementById('lvl');
    const sizeGrid = Number(selectEl.options[selectEl.selectedIndex].value);
    let numbersBox = [];
    let numbersRand = [];

    //Reset Grid
    gridEl.innerHTML = '';

    insertNumGrid(sizeGrid, gridEl);
    
    numbersBox = getNumBox(sizeGrid);

    giveWidthBox(sizeGrid);

    numbersRand = getNumRand(16, sizeGrid);
    console.log('Numeri bomba: ', numbersRand);

    const allBox = document.getElementsByClassName('box');

    for (let i = 0; i < sizeGrid; i++) {
        allBox[i].addEventListener('click', function () {
            const num = Number(allBox[i].textContent);

            if (numbersRand.includes(num)) {
                //Rendi tutti i numeri rossi
                allBox[i].classList.add('red');
            } else {
                allBox[i].classList.add('blue');
            }
        });
    }

   // o crei una funzione che richiami sopra nell'if
   // oppure bho

});