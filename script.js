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

const result = {
    add: [],
    sub: [],
    multiply: [],
    divide: [],
    resultMini: [],
    allValue: [],
}
console.log(result);


window.addEventListener('keydown', function (e) {

    const dataKeys = document.querySelector(`button[data-key = "${e.keyCode}"]`);
    dataKeys.classList.add('btn__active');
    // console.log(dataKeys.textContent);
    if ((displayLarge.textContent).length < 20) {
        displayLarge.textContent += dataKeys.textContent;
    }

})


window.addEventListener('keydown', function (e) {
    const operatorKeys = document.querySelector(`button[operator-key = "${e.keyCode}"]`);
    operatorKeys.classList.add('btn__active');
    if (operatorKeys.textContent === "+") {

        if ((displayMini.textContent).length < 50) {
            displayMini.textContent += (Number(displayLarge.textContent) + ' +');
        }
        result.add.push(displayLarge.textContent);

        displayLarge.textContent = '';
    } else if ((operatorKeys.textContent === "-")) {
        if ((displayMini.textContent).length < 50) {
            displayMini.textContent += (Number(displayLarge.textContent) + ' -');
        }
        result.sub.push(displayLarge.textContent);
        displayLarge.textContent = '';
    } else if ((operatorKeys.textContent === "*")) {

        if ((displayMini.textContent).length < 50) {
            displayMini.textContent += (Number(displayLarge.textContent) + ' *');
        }
        result.multiply.push(displayLarge.textContent);
        displayLarge.textContent = '';
    } else if ((operatorKeys.textContent === "/")) {

        if ((displayMini.textContent).length < 50) {
            displayMini.textContent += (Number(displayLarge.textContent) + ' /');
        }
        result.divide.push(displayLarge.textContent);
        displayLarge.textContent = '';
    }

    if (operatorKeys.textContent === "=") {
        if ((displayMini.textContent).length < 50) {
            displayMini.textContent += (Number(displayLarge.textContent));
        }
        // displayLarge.textContent = '';

        result['resultMini'].push((displayMini.textContent));

        let localMemory = result.resultMini.pop();
        // console.log(localMemory);

        let transformValue = (localMemory.replaceAll(/[^\w\s]/g, ','));
        // console.log(local, local.length, typeof local);

        let arr = transformValue.split(',');
        console.log(arr);

        result['allValue'].push(arr);


    }

})



window.addEventListener('keydown', function (e) {
    const displayKeys = document.querySelector(`button[display-key = "${e.keyCode}"]`);
    displayKeys.classList.add('btn__active');
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


