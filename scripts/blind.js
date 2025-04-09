const firstButton = document.querySelector("#firstBtn");
const secondButton = document.querySelector("#secondBtn");
const thirdButton = document.querySelector("#thirdBtn");
const headText = document.querySelector('#head-text');
const fourthButton = document.querySelector('#fourthBtn');
const amountInp = document.querySelector('#amount-inp');

const symbols = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];

let srez_symb = [];

let randStr;
let startTime;
let endTime;
let userlngt;


secondButton.addEventListener('click', chooseRowAmount);

firstButton.style.visibility = 'hidden';
thirdButton.style.visibility = 'hidden';
fourthButton.style.display = 'none';
amountInp.style.display = 'none';

headText.innerHTML = 'Click "play" to start!'
secondButton.innerHTML = 'play'


function rndInteger(max) {
    return Math.floor(Math.random() * max);
}

function randomString(size) {// резервирование!!!!
    str = '';

    for (let i = 0; i < size; i++) {
        str += srez_symb[rndInteger(srez_symb.length)]
    }

    return str
}

function chooseRowAmount() {
    secondButton.removeEventListener('click', chooseRowAmount);
    
    firstButton.addEventListener('click', () => {
        srez_symb = symbols.slice(0, 10);
        main();
    })
    secondButton.addEventListener('click', () => {
        srez_symb = symbols.slice(10, 19);
        main();
    });
    thirdButton.addEventListener('click', () => {
        srez_symb = symbols.slice(19);
        main();
    });
    fourthButton.addEventListener('click', () => {
        srez_symb = symbols;
        main();
    });
    
    firstButton.style.visibility = 'visible';
    thirdButton.style.visibility = 'visible';
    headText.innerHTML = 'Choose row:'
    secondButton.innerHTML = 'Middle'
    fourthButton.style.display = 'block';
    amountInp.style.display = 'block';
}
function main() {
    userlngt = amountInp.value;
    randStr = randomString(userlngt);
    startTime = new Date().getTime()
    while (true) {
        let inp = prompt(`Введите ${randStr}`);
        if (inp === randStr) {
            endTime = new Date().getTime();
            alert(`Правильно! Это заняло у вас ${(endTime - startTime) / 1000} секунд`);
            randStr = randomString(userlngt);
            startTime = new Date().getTime()
        } else if (inp == 0) {
            break;
        } else {
            alert('Неправильно. Попробуй еще');
        }
    }
}