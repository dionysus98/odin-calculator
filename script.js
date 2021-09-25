'use strict';

//BURGER MENU
const burgerMenu = document.getElementById('burger__menu');
const layoutOne = document.getElementById('layout__one');

// COLOR MENU
const colorMenu = document.getElementById('color');
const layoutThree = document.getElementById('layout__three');

//display
const displayMini = document.getElementById('display__mini');
const displayLarge = document.getElementById('display__large');

const calcButtons = document.getElementById('buttons');

burgerMenu.addEventListener('click', function () {
    layoutOne.classList.toggle('layout__one__active');
});



colorMenu.addEventListener('click', function () {
    layoutThree.classList.toggle('layout__three__active');
})

const result = {
    resultMini: [],
    resultLarge: [],
}


window.addEventListener('keydown', function (e) {
    const dataKeys = document.querySelector(`button[data-key = "${e.keyCode}"]`);
    dataKeys.classList.add('btn__active');

    // console.log(dataKeys.textContent);
    if ((displayLarge.textContent).length < 20) {
        displayLarge.textContent += dataKeys.textContent;
    }
    resultLarge.push(Number(displayLarge.textContent));


})

window.addEventListener('keydown', function (e) {
    const operatorKeys = document.querySelector(`button[operator-key = "${e.keyCode}"]`);
    operatorKeys.classList.add('btn__active');
    if (operatorKeys.textContent === "+") {
        if ((displayMini.textContent).length < 50) {
            displayMini.textContent += (displayLarge.textContent + ' + ');
        }
        displayLarge.textContent = '';
    } else if ((operatorKeys.textContent === "-")) {
        if ((displayMini.textContent).length < 50) {
            displayMini.textContent += (displayLarge.textContent + ' - ');
        }
        displayLarge.textContent = '';
    } else if ((operatorKeys.textContent === "*")) {
        if ((displayMini.textContent).length < 50) {
            displayMini.textContent += (displayLarge.textContent + ' * ');
        }
        displayLarge.textContent = '';
    } else if ((operatorKeys.textContent === "/")) {
        if ((displayMini.textContent).length < 50) {
            displayMini.textContent += (displayLarge.textContent + ' / ');
        }
        displayLarge.textContent = '';
    }
})


window.addEventListener('keydown', function (e) {
    const displayKeys = document.querySelector(`button[display-key = "${e.keyCode}"]`);
    displayKeys.classList.add('btn__active');

    console.log(displayKeys.textContent);
    if (displayKeys.textContent === "Clear") {
        displayLarge.textContent = '';
        displayMini.textContent = '';
        resultLarge = [];
    } else if (displayKeys.textContent === "<<") {
        displayLarge.textContent = (displayLarge.textContent).slice(0, -1);
    }
})



const keysTransform = Array.from(document.querySelectorAll('.btn'));
keysTransform.forEach(key => key.addEventListener('transitionend', function (event) {
    if (event.propertyName !== 'transform') return;
    event.target.classList.remove('btn__active');
}))