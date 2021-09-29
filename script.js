'use strict';

// WORK YET to do:
// 3 Add - Click function
// 4 Add - Themes



//BURGER MENU
const burgerMenu = document.getElementById('burger__menu');
const layoutOne = document.getElementById('layout__one');

burgerMenu.addEventListener('click', function () {
    layoutOne.classList.toggle('layout__one__active');
});

// COLOR MENU
const colorMenu = document.getElementById('color');
const layoutThree = document.getElementById('layout__three');

colorMenu.addEventListener('click', function () {
    layoutThree.classList.toggle('layout__three__active');
})

//DISPLAY
const displayMini = document.getElementById('display__mini');
const displayLarge = document.getElementById('display__large');

//CALCULAOTR
let equalTo = '';
let dotKey = [];
let operator = '';
let operatorArr = [];
let firstValue = 0;
let secondValue = 0;
let previousOperand = [];
let result = 0;


//DATA-KEYS

window.addEventListener('keydown', function dataKeys(e) {

    //DATA-KEYS

    const dataKeys = document.querySelector(`button[data-key = "${e.keyCode}"]`);
    if (!dataKeys) return;
    dataKeys.classList.add('btn__active');

    if (dataKeys.textContent === '.') {
        dotKey.push(dataKeys.textContent);
    }

    if (dotKey.length > 1) return;

    if ((displayLarge.textContent).length < 20) {
        displayLarge.textContent += dataKeys.textContent;
    }


    previousOperand.push(displayLarge.textContent);
    console.log(previousOperand);
})


// OPERATOR-KEYS

window.addEventListener('keydown', function operatorKeys(e) {
    const operatorKeys = document.querySelector(`button[operator-key = "${e.keyCode}"]`);
    if (!operatorKeys) return;
    operatorKeys.classList.add('btn__active');

    //ADDITION

    if (operatorKeys.textContent === '+') {

        displayLarge.style.cssText = 'color : coral';
        operator = operatorKeys.textContent;
        operatorArr.push(operatorKeys.textContent);
        console.log(operatorArr);
        if ((displayMini.textContent).length < 50) {
            displayMini.textContent += ((displayLarge.textContent) + ` ${operator} `);
        }
        displayLarge.textContent = '';

        if (equalTo !== '=') {
            if (firstValue === 0) firstValue = Number(previousOperand.pop());
            else secondValue = Number(previousOperand.pop());
        }
        console.log(`firstValue: ${firstValue}`);
        console.log(`secondValue: ${secondValue}`);
        if (firstValue !== 0 && secondValue !== 0) {
            result = mathFunctions(firstValue, secondValue, `${operatorArr[operatorArr.length - 2]}`);
            console.log(`result: ${result}`);
            displayMini.textContent = `${result} ${operatorKeys.textContent}`;
            firstValue = result;
            console.log(`firstValue(1): ${firstValue}`)
        }
        dotKey = [];

        //SUBTRACTION

    } else if (operatorKeys.textContent === '-') {
        displayLarge.style.cssText = 'color : purple';
        operator = operatorKeys.textContent;
        operatorArr.push(operatorKeys.textContent);
        if ((displayMini.textContent).length < 50) {
            displayMini.textContent += ((displayLarge.textContent) + ` ${operator} `);
        }

        displayLarge.textContent = '';

        if (equalTo !== '=') {
            if (firstValue === 0) firstValue = Number(previousOperand.pop());
            else secondValue = Number(previousOperand.pop());
        }

        console.log(`firstValue: ${firstValue}`);
        console.log(`secondValue: ${secondValue}`);
        if (firstValue !== 0 && secondValue !== 0) {
            result = mathFunctions(firstValue, secondValue, `${operatorArr[operatorArr.length - 2]}`);
            console.log(`result: ${result}`);
            displayMini.textContent = `${result} ${operatorKeys.textContent}`;
            firstValue = result;
            console.log(`firstValue(1): ${firstValue}`)
        }
        dotKey = [];

        //MULTIPLY

    } else if (operatorKeys.textContent === '*') {
        displayLarge.style.cssText = 'color : darkRed';
        operator = operatorKeys.textContent;
        operatorArr.push(operatorKeys.textContent);
        if ((displayMini.textContent).length < 50) {
            displayMini.textContent += ((displayLarge.textContent) + ` ${operator} `);
        }
        displayLarge.textContent = '';

        if (equalTo !== '=') {
            if (firstValue === 0) firstValue = Number(previousOperand.pop());
            else secondValue = Number(previousOperand.pop());
        }
        console.log(`firstValue: ${firstValue}`);
        console.log(`secondValue: ${secondValue}`);
        if (firstValue !== 0 && secondValue !== 0) {
            result = mathFunctions(firstValue, secondValue, `${operatorArr[operatorArr.length - 2]}`);
            console.log(`result: ${result}`);

            displayMini.textContent = `${result} ${operatorKeys.textContent}`;
            firstValue = result;
            console.log(`firstValue(1): ${firstValue}`)
        }
        dotKey = [];

        //DIVIDE

    } else if (operatorKeys.textContent === '/') {
        displayLarge.style.cssText = 'color : darkGreen';
        operator = operatorKeys.textContent;
        operatorArr.push(operatorKeys.textContent);
        if ((displayMini.textContent).length < 50) {
            displayMini.textContent += ((displayLarge.textContent) + ` ${operator} `);
        }
        displayLarge.textContent = '';
        if (equalTo !== '=') {
            if (firstValue === 0) firstValue = Number(previousOperand.pop());
            else secondValue = Number(previousOperand.pop());
        }
        console.log(`firstValue: ${firstValue}`);
        console.log(`secondValue: ${secondValue}`);
        if (firstValue !== 0 && secondValue !== 0) {
            result = mathFunctions(firstValue, secondValue, `${operatorArr[operatorArr.length - 2]}`);
            console.log(`result: ${result}`);

            displayMini.textContent = `${result} ${operatorKeys.textContent}`;
            firstValue = result;
            console.log(`firstValue(1): ${firstValue}`)
        }
        dotKey = [];

        //EQUAL TO

    } else if (operatorKeys.textContent === "=") {

        displayLarge.style.cssText = 'color : darkBlue';

        equalTo = operatorKeys.textContent;
        if ((displayMini.textContent).length < 50) {
            displayMini.textContent += ((displayLarge.textContent) + ` ${operatorKeys.textContent} `);
        }
        displayLarge.textContent = '';
        displayMini.textContent = '';
        console.log(operator)
        if (firstValue === 0) firstValue = Number(previousOperand.pop());
        else secondValue = Number(previousOperand.pop());
        console.log(`firstValue: ${firstValue}`);
        console.log(`secondValue: ${secondValue}`);


        if (firstValue !== 0 && secondValue !== 0) {
            result = mathFunctions(firstValue, secondValue, `${operator}`);
            console.log(`result: ${result}`);
            displayMini.textContent = `${firstValue} ${operator} ${secondValue} ${operatorKeys.textContent}`;
            displayLarge.textContent = `${result}`;
            console.log(`firstValue(1): ${firstValue}`)
        } else if (secondValue === 0 && operator === '+') displayLarge.textContent = firstValue;
        else if (secondValue === 0 && operator === '-') displayLarge.textContent = -firstValue;
        else if (secondValue === 0 && operator === '*' || operator === '/') displayLarge.textContent = 0;

        dotKey = [];
    }
})

//CLEAR and BACKSPACE

window.addEventListener('keydown', function displayKeys(e) {
    const displayKeys = document.querySelector(`button[display-key = "${e.keyCode}"]`);
    if (!displayKeys) return;
    displayKeys.classList.add('btn__active');
    if (displayKeys.textContent === "Clear") {
        displayLarge.textContent = '';
        displayMini.textContent = '';
        equalTo = '';
        dotKey = [];
        operator = '';
        operatorArr = [];
        firstValue = 0;
        secondValue = 0;
        previousOperand = [];
        result = 0;
    } else if (displayKeys.textContent === "<<") {
        displayLarge.textContent = (displayLarge.textContent).slice(0, -1);
    }
})

//BUTTON STYLE 

const keysTransform = Array.from(document.querySelectorAll('.btn'));
keysTransform.forEach(key => key.addEventListener('transitionend', function (event) {
    if (event.propertyName !== 'transform') return;
    event.target.classList.remove('btn__active');
}))


//OPERATIONS
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



// MATH-FUNCTIONS
function mathFunctions(x, y, operator) {
    if (operator === '+') {
        return roundNum(add(x, y));
    }
    else if (operator === '-') {
        return roundNum(sub(x, y));
    }
    else if (operator === '*') {
        return roundNum(multiply(x, y));
    }
    else if (operator === '/') {
        return roundNum(divide(x, y));
    }
}

// DECIMAL ROUND OFF (mdn reference)
function roundNum(num) {
    return Math.round((num + Number.EPSILON) * 100) / 100;
}





//CLICK FUNCTION


const buttons = document.querySelectorAll('.btn');

let dataBtn;
let operatorBtn;
let displayBtn;

buttons.forEach(btn => {
    btn.addEventListener('click', function () {
        dataBtn = btn.getAttribute('data-key');

        //DATAKEYS
        const dataKeys = document.querySelector(`button[data-key = "${dataBtn}"]`);
        if (!dataKeys) return;
        // dataKeys.classList.toggle('btn__active');
        if (dataBtn === '110') {
            dotKey.push('.');
        }
        if (dotKey.length > 1) return;

        if ((displayLarge.textContent).length < 20) {
            displayLarge.textContent += dataKeys.textContent;
        }

        previousOperand.push(displayLarge.textContent);
        console.log(previousOperand);

    })

})


buttons.forEach(btn => {
    btn.addEventListener('click', function () {
        operatorBtn = btn.getAttribute('operator-key');

        const operatorKeys = document.querySelector(`button[operator-key = "${operatorBtn}"]`);
        if (!operatorKeys) return;

        //ADDITION


        if (operatorKeys.textContent === '+') {

            displayLarge.style.cssText = 'color : coral';
            operator = operatorKeys.textContent;
            operatorArr.push(operatorKeys.textContent);
            if ((displayMini.textContent).length < 50) {
                displayMini.textContent += ((displayLarge.textContent) + ` ${operator} `);
            }
            displayLarge.textContent = '';

            if (equalTo !== '=') {
                if (firstValue === 0) firstValue = Number(previousOperand.pop());
                else secondValue = Number(previousOperand.pop());
            }
            if (firstValue !== 0 && secondValue !== 0) {
                result = mathFunctions(firstValue, secondValue, `${operatorArr[operatorArr.length - 2]}`);
                displayMini.textContent = `${result} ${operatorKeys.textContent}`;
                firstValue = result;
            }
            dotKey = [];

            //SUBTRACTION

        } else if (operatorKeys.textContent === '-') {
            displayLarge.style.cssText = 'color : purple';
            operator = operatorKeys.textContent;
            operatorArr.push(operatorKeys.textContent);
            if ((displayMini.textContent).length < 50) {
                displayMini.textContent += ((displayLarge.textContent) + ` ${operator} `);
            }

            displayLarge.textContent = '';

            if (equalTo !== '=') {
                if (firstValue === 0) firstValue = Number(previousOperand.pop());
                else secondValue = Number(previousOperand.pop());
            }


            if (firstValue !== 0 && secondValue !== 0) {
                result = mathFunctions(firstValue, secondValue, `${operatorArr[operatorArr.length - 2]}`);
                displayMini.textContent = `${result} ${operatorKeys.textContent}`;
                firstValue = result;
            }
            dotKey = [];

            //MULTIPLY

        } else if (operatorKeys.textContent === '*') {
            displayLarge.style.cssText = 'color : darkRed';
            operator = operatorKeys.textContent;
            operatorArr.push(operatorKeys.textContent);
            if ((displayMini.textContent).length < 50) {
                displayMini.textContent += ((displayLarge.textContent) + ` ${operator} `);
            }
            displayLarge.textContent = '';

            if (equalTo !== '=') {
                if (firstValue === 0) firstValue = Number(previousOperand.pop());
                else secondValue = Number(previousOperand.pop());
            }
            if (firstValue !== 0 && secondValue !== 0) {
                result = mathFunctions(firstValue, secondValue, `${operatorArr[operatorArr.length - 2]}`);


                displayMini.textContent = `${result} ${operatorKeys.textContent}`;
                firstValue = result;
            }
            dotKey = [];

            //DIVIDE

        } else if (operatorKeys.textContent === '/') {
            displayLarge.style.cssText = 'color : darkGreen';
            operator = operatorKeys.textContent;
            operatorArr.push(operatorKeys.textContent);
            if ((displayMini.textContent).length < 50) {
                displayMini.textContent += ((displayLarge.textContent) + ` ${operator} `);
            }
            displayLarge.textContent = '';
            if (equalTo !== '=') {
                if (firstValue === 0) firstValue = Number(previousOperand.pop());
                else secondValue = Number(previousOperand.pop());
            }

            if (firstValue !== 0 && secondValue !== 0) {
                result = mathFunctions(firstValue, secondValue, `${operatorArr[operatorArr.length - 2]}`);


                displayMini.textContent = `${result} ${operatorKeys.textContent}`;
                firstValue = result;

            }
            dotKey = [];

            //EQUAL TO

        } else if (operatorKeys.textContent === "=") {

            displayLarge.style.cssText = 'color : darkBlue';

            equalTo = operatorKeys.textContent;
            if ((displayMini.textContent).length < 50) {
                displayMini.textContent += ((displayLarge.textContent) + ` ${operatorKeys.textContent} `);
            }
            displayLarge.textContent = '';
            displayMini.textContent = '';
            console.log(operator)
            if (firstValue === 0) firstValue = Number(previousOperand.pop());
            else secondValue = Number(previousOperand.pop());



            if (firstValue !== 0 && secondValue !== 0) {
                result = mathFunctions(firstValue, secondValue, `${operator}`);

                displayMini.textContent = `${firstValue} ${operator} ${secondValue} ${operatorKeys.textContent}`;
                displayLarge.textContent = `${result}`;

            } else if (secondValue === 0 && operator === '+') displayLarge.textContent = firstValue;
            else if (secondValue === 0 && operator === '-') displayLarge.textContent = -firstValue;
            else if (secondValue === 0 && operator === '*' || operator === '/') displayLarge.textContent = 0;

            dotKey = [];
        }


    })
})



buttons.forEach(btn => {
    btn.addEventListener('click', function () {
        displayBtn = btn.getAttribute('display-key');

        //DATAKEYS
        const displayKeys = document.querySelector(`button[display-key = "${displayBtn}"]`);
        if (!displayKeys) return;

        if (displayKeys.textContent === "Clear") {
            displayLarge.textContent = '';
            displayMini.textContent = '';
            equalTo = '';
            dotKey = [];
            operator = '';
            operatorArr = [];
            firstValue = 0;
            secondValue = 0;
            previousOperand = [];
            result = 0;
        } else if (displayKeys.textContent === "<<") {
            displayLarge.textContent = (displayLarge.textContent).slice(0, -1);
        }
    })

})


//THEME

const mettalic = document.getElementById('dark');
const clouds = document.getElementById('light');
const sky = document.getElementById('blue');
const leaves = document.getElementById('green');

mettalic.addEventListener('click', function () {
    document.querySelector('body').style.backgroundColor = 'slateGrey';
    document.getElementById('buttons').style.backgroundColor = 'black';
})

clouds.addEventListener('click', function () {
    document.querySelector('body').style.backgroundColor = 'whiteSmoke'
    document.getElementById('buttons').style.backgroundColor = 'gainsboro'
})

sky.addEventListener('click', function () {
    document.querySelector('body').style.backgroundColor = '#01b0d342'
    document.getElementById('buttons').style.backgroundColor = '#01b0d3c0'
})

leaves.addEventListener('click', function () {
    document.querySelector('body').style.backgroundColor = 'lightGreen'
    document.getElementById('buttons').style.backgroundColor = 'forestGreen'
})