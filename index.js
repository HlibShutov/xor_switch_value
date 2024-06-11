const form = document.querySelector('form');
const divs = document.querySelectorAll('div');

const valuesDiv = document.querySelector('.values');
const aValues = document.querySelector('.values > #a');
const bValues = document.querySelector('.values > #b');

const binaryValuesDiv = document.querySelector('.binary-values');
const aBinaryValues = document.querySelector('.binary-values > #a');
const bBinaryValues = document.querySelector('.binary-values > #b');


divs.forEach((div) => div.hidden = true);

const switchValues = (event) => {
    event.preventDefault();
    let a = Number(event.target.a.value);
    let b = Number(event.target.b.value);
    aValues.innerText = a;
    bValues.innerText = b;
    a = a.toString(2);
    b = b.toString(2);
    if (a.length > b.length) {
	b = b.padStart(a.length - b.length + 1, "0");
    } else if (a.length < b.length) {
        a = a.padStart(b.length - a.length + 1, "0");
    }
    aBinaryValues.innerText = a;
    bBinaryValues.innerText = b;
};

form.addEventListener('submit', switchValues);

