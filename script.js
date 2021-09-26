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


burgerMenu.addEventListener('click', function () {
    layoutOne.classList.toggle('layout__one__active');
});


colorMenu.addEventListener('click', function () {
    layoutThree.classList.toggle('layout__three__active');
})



window.addEventListener('keydown', function (e) {

    const dataKeys = document.querySelector(`button[data-key = "${e.keyCode}"]`);
    if (!dataKeys) return;
    dataKeys.classList.add('btn__active');
    if ((displayLarge.textContent).length < 20) {
        displayLarge.textContent += dataKeys.textContent;
    }
})



const keysTransform = Array.from(document.querySelectorAll('.btn'));
keysTransform.forEach(key => key.addEventListener('transitionend', function (event) {
    if (event.propertyName !== 'transform') return;
    event.target.classList.remove('btn__active');
}))