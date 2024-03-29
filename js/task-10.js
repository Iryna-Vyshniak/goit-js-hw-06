/*
Написати скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

<div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</div>

<div id="boxes"></div>

Створити функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

Розміри найпершого <div> - 30px на 30px.
Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

Створити функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.
*/

document.body.style.backgroundColor = '#abbbc4';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controls = document.querySelector('controls');
const inputNumberEl = document.querySelector('[type="number"]');
const createBtnEl = document.querySelector('button[data-create]');
const destroyBtnEl = document.querySelector('button[data-destroy]');
const divBoxesEl = document.getElementById('boxes');
divBoxesEl.style.display = 'flex';
divBoxesEl.style.flexWrap = 'wrap';
divBoxesEl.style.alignItems = 'center';
divBoxesEl.style.marginTop = '30px';

// inputNumberEl.addEventListener('input', toogleValue);
// createBtnEl.addEventListener('click', () => {
//   createBoxes(Number(inputNumberEl.value));
// });
// destroyBtnEl.addEventListener('click', destroyBoxesMarkup);

// let inputValue = 0;
// function toogleValue(event) {
//   inputValue = event.currentTarget.value;
//   console.log(inputValue);
// }

// function createBoxes(amount) {
//   let divArray = [];
//   let sizeDefault = 30;
//   for (let i = 0; i < amount; i += 1) {
//     sizeDefault += 10;
//     const divElement = document.createElement('div');
//     divElement.classList = 'item';
//     divElement.style.height = `${sizeDefault}px`;
//     divElement.style.width = `${sizeDefault}px`;
//     divElement.style.marginRight = '30px';
//     divElement.style.marginBottom = '30px';
//     divElement.style.backgroundColor = getRandomHexColor();
//     divArray.push(divElement);
//     // divBoxesEl.appendChild(divElement);
//   }
//   return divBoxesEl.append(...divArray);
// }

// function destroyBoxesMarkup() {
//   inputNumberEl.value = '';
//   return (divBoxesEl.innerHTML = '');
// }

// --- next variant -------------------------------------------

createBtnEl.addEventListener('click', () => {
  //console.log(inputNumberEl.value);
  if (
    Number(inputNumberEl.value.trim()) > Number(inputNumberEl.max) ||
    Number(inputNumberEl.value.trim()) < Number(inputNumberEl.min)
  ) {
    alert('Please enter number from 1 to 100');
  } else {
    createBoxes(inputNumberEl.value.trim());
  }
  inputNumberEl.value = '';
});

destroyBtnEl.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  inputNumberEl.value = '';
  divBoxesEl.innerHTML = '';
}

// function createBoxes(amount) {
//   let defaultSize = 30;
//   const boxesArr = [];
//   for (let i = 0; i < amount; i += 1) {
//     defaultSize += 10 * i;
//     const div = document.createElement('div');
//     div.classList = 'item';
//     div.style.width = `${defaultSize}px`;
//     div.style.height = `${defaultSize}px`;
//     div.style.marginRight = '30px';
//     div.style.marginBottom = '30px';
//     div.style.backgroundColor = getRandomHexColor();
//     boxesArr.push(div);
//     console.log('arr length', boxesArr.length);
//   }
//   return divBoxesEl.append(...boxesArr);
// }

// --- next variant function createBoxes ()--------------------
function createBoxes(amount) {
  let size = 30;
  const boxesArr = [];
  for (let i = 0; i < amount; i += 1) {
    size += 10 * i;
    const div = `<div class="item" style="display: block; margin-right: 30px; margin-bottom: 30px; background-color: ${getRandomHexColor()}; width: ${size}px; height: ${size}px;"></div>`;
    boxesArr.push(div);
  }
  divBoxesEl.insertAdjacentHTML('beforeend', boxesArr.join(''));
}
