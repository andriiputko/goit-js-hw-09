const CHANGE_COLOR_DELAY = 1000;
let idInt = null;

const set = {
    btnStart: document.querySelector('button[data-start]'),
    btnStop: document.querySelector('button[data-stop]'),
    body: document.querySelector('body'),
}

set.btnStop.disabled = true;
set.btnStart.addEventListener('click', onBtnStartChangeColor);
set.btnStop.addEventListener('click', onBtnStopChangeColor);


function onBtnStartChangeColor() {
    set.btnStart.disabled = true;
    set.btnStop.disabled = false;


    idInt = setInterval(() => {
        set.body.style.backgroundColor = getRandomHexColor()
    }, CHANGE_COLOR_DELAY);
}

function onBtnStopChangeColor() {
    set.btnStart.disabled = false;
    set.btnStop.disabled = true;
 

    clearInterval(idInt);
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
