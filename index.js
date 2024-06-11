const form = document.querySelector('form');
const divs = document.querySelectorAll('div');
valuesDiv = document.querySelector('.values');
aValues = document.querySelector('.values > #a');
bValues = document.querySelector('.values > #b');

divs.forEach((div) => div.hidden = true);

const switchValues = (event) => {
    event.preventDefault();
    a = Number(event.target.a.value);
    b = Number(event.target.b.value);
    aValues.innerText = a;
    bValues.innerText = b;
};

form.addEventListener('submit', switchValues);

