let firstvalue = '';
let secondValue = '';

const result = {
    add: [],
    sub: [],
    multiply: [],
    divide: [],
    resultMini: [],
    resultLarge: [],
    allValue: [],
}

console.log(result);


window.addEventListener('keydown', function (e) {

    const dataKeys = document.querySelector(`button[data-key = "${e.keyCode}"]`);
    dataKeys.classList.add('btn__active');
    if ((displayLarge.textContent).length < 20) {
        displayLarge.textContent += dataKeys.textContent;
    }

})


window.addEventListener('keydown', function (e) {

    const operatorKeys = document.querySelector(`button[operator-key = "${e.keyCode}"]`);
    operatorKeys.classList.add('btn__active');

    if (operatorKeys.textContent === "+") {
        if ((displayMini.textContent).length < 50) {
            displayMini.textContent += ((displayLarge.textContent) + ' +');
        }
        result.add.push(displayLarge.textContent);
        displayLarge.textContent = '';
        // displayLarge.textContent = mathFunctions(result.add[0], result.add[1], '+');

    } else if ((operatorKeys.textContent === "-")) {
        if ((displayMini.textContent).length < 50) {
            displayMini.textContent += ((displayLarge.textContent) + ' -');
        }
        result.sub.push(displayLarge.textContent);
        displayLarge.textContent = '';

    } else if ((operatorKeys.textContent === "*")) {
        if ((displayMini.textContent).length < 50) {
            displayMini.textContent += ((displayLarge.textContent) + ' *');
        }
        result.multiply.push(displayLarge.textContent);
        displayLarge.textContent = '';

    } else if ((operatorKeys.textContent === "/")) {

        if ((displayMini.textContent).length < 50) {
            displayMini.textContent += ((displayLarge.textContent) + ' /');
        }
        result.divide.push(displayLarge.textContent);
        displayLarge.textContent = '';
    }


    if (operatorKeys.textContent === "=") {
        if ((displayMini.textContent).length < 50) {
            displayMini.textContent += ((displayLarge.textContent) + ' =');
        }

        result['resultMini'].push((displayMini.textContent));

        let localMemory = result.resultMini.pop();

        let transformValue = (localMemory.replaceAll(/[^\w\s]/g, ','));

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







function add(x, y) {
    return x + y;
}

function sub(x, y) {
    return x - y;
}
function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function mathFunctions(x, y, operator) {
    x = Number(x);
    y = Number(y);

    if (operator === '+') return add(x, y);
    else if (operator === '-') return sub(x, y);
    else if (operator === '*') return multiply(x, y);
    else if (operator === '/') return divide(x, y);
}