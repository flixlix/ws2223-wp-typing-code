let body = document.getElementsByTagName('body');
let letters = document.getElementsByClassName('main-name')[0];
let fillerBg = document.getElementById('blackbg');
let spacingElementsArray = document.getElementsByClassName('spacing');
let root = document.documentElement;
let yearsElement = document.getElementById('years');

let yearsInterval;

let yearsLeft = 78;

const animationDuration = 10000;
const animationIteration = "infinite";
lettersChildren = Array.from(letters.children);

function updateYears() {
    yearsElement.innerHTML = yearsLeft;
    if (yearsLeft >= 2) yearsLeft = yearsLeft - 2;
}

function letterTilt() {
    lettersChildren.forEach((letter) => {
        /* gets random number between -50 and 50 and saves it to the rot variable */
        let rot = getRandomNumberBetween(-70, 70);
        let pad = getRandomNumberBetween(-20, 50);
        let wid = getRandomNumberBetween(50, 300);
        letter.style.transform = `rotate(${rot}deg)`;
        letter.style.paddingInline = pad + 'px';
        letter.style.fontVariationSettings = `"wght" ${wid}`;
        letter.style.transition = `all ${animationDuration}ms ease`;
    });
}


function letterFillUp() {
    letters.style.animation = `text-fill-up ${animationDuration}ms ease ${animationIteration}`;
}


function fillUpBackground() {
    fillerBg.style.animation = `bg-fill-up ${animationDuration}ms ease ${animationIteration}`;
}

function getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function doAnimations() {
    letterTilt();
    letterFillUp();
    fillUpBackground();
    yearsInterval = setInterval(updateYears, 200);
    setTimeout(resetAnimations, animationDuration - 50);
}

function resetAnimations() {
    clearInterval(yearsInterval);
    yearsLeft = 78;
    letters.style.transition = `all 0ms ease`;
    lettersChildren.forEach((letter) => {
        letter.style.paddingInline = '0px';
        letter.style.transform = "";
        letter.style.fontVariationSettings = '"wght" 1000';
        letter.style.transition = "0s";
    });
}

/* start animations immediately */
doAnimations();
/* repeat animations with the interval of the duration of the animation */
setInterval(() => {
    /* start animations */
    doAnimations();
}, animationDuration);