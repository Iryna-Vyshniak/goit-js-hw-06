/*
Написати скрипт, який під час набору тексту в інпуті input#name - input(подія input), підставляє його поточне значення в span#name - output.Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

< input type = "text" id = "name-input" placeholder = "Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1>
*/

/* var 1
const inputName = document.getElementById('name-input');
const outputName = document.getElementById('name-output');

const placeholder = (event) => {
    outputName.textContent = inputName.value !== ''
        ? event.currentTarget.value
        : 'Anonymous';
};

inputName.addEventListener('input', placeholder);
*/

// var 2

document.querySelector('body').style.backgroundColor = '#cfd1e1';

const inputRef = document.querySelector('#name-input');
const nameRef = document.querySelector('#name-output');

const getInputValue = ({ target }) =>
  (nameRef.innerText = target.value ? target.value : 'Anonymous');

inputRef.addEventListener('input', getInputValue);
