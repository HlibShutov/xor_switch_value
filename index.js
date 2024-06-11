const form = document.querySelector('form');
const divs = document.querySelectorAll('div');

const valuesDiv = document.querySelector('.values');
const aValues = document.querySelector('.values > #a');
const bValues = document.querySelector('.values > #b');

const binaryValuesDiv = document.querySelector('.binary-values');
const aBinaryValues = document.querySelector('.binary-values > #a');
const bBinaryValues = document.querySelector('.binary-values > #b');

const firstXorDiv = document.querySelector('.first-xor');
const aFirstXor = document.querySelector('.first-xor > #a');
const bFirstXor = document.querySelector('.first-xor > #b');

const secondXorDiv = document.querySelector('.second-xor');
const aSecondXor = document.querySelector('.second-xor > #a');
const bSecondXor = document.querySelector('.second-xor > #b');

const thirdXorDiv = document.querySelector('.third-xor');
const aThirdXor = document.querySelector('.third-xor > #a');
const bThirdXor = document.querySelector('.third-xor > #b');

const switchedValuesDiv = document.querySelector('.switched-values');
const aSwitchedValues = document.querySelector('.switched-values > #a');
const bSwitchedValues = document.querySelector('.switched-values > #b');

divs.forEach((div) => div.hidden = true);

const xor = (x, y) => {
    x = x.split('');
    for (let i = 0; i < x.length; i++) {
        x[i] = x[i] === y[i] ? '0' : '1';
    }
    return x.join('');
}

const switchValues = (event) => {
    event.preventDefault();
    let a = Number(event.target.a.value);
    let b = Number(event.target.b.value);

    aValues.innerText = a;
    bValues.innerText = b;

    a = a.toString(2);
    b = b.toString(2);
    if (a.length > b.length) {
	b = b.padStart(a.length, '0');
    } else if (a.length < b.length) {
        a = a.padStart(b.length, '0');
    }

    aBinaryValues.innerText = a;
    bBinaryValues.innerText = b;
    
    a = xor(a, b);

    aFirstXor.innerText = a;
    bFirstXor.innerText = b;

    b = xor(a, b);

    aSecondXor.innerText = a;
    bSecondXor.innerText = b;

    a = xor(a, b);

    aThirdXor.innerText = a;
    bThirdXor.innerText = b;

    a = parseInt(a, 2);
    b = parseInt(b, 2);

    aSwitchedValues.innerText = a;
    bSwitchedValues.innerText = b;
};

form.addEventListener('submit', switchValues);

