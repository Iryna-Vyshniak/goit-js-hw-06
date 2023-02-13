/*
Написати скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Please enter 6 symbols"
/>

Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті data-length.
Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
Для додавання стилів використати CSS-класи valid і invalid, які вже додані у вихідні файли завдання.

#validation-input {
  border: 3px solid #bdbdbd;
}

#validation-input.valid {
  border-color: #4caf50;
}

#validation-input.invalid {
  border-color: #f44336;
}

*/
document.querySelector('body').style.backgroundColor = '#EBECF0';
const inputRef = document.getElementById('validation-input');
inputRef.addEventListener('blur', onBlurBorderColor);

// var 1

// function onBlurBorderColor(event) {
//   const inputDataLength = Number(inputRef.dataset.length);
//   const inputValueLength = Number(inputRef.value.trim().length);

//   if (inputValueLength === inputDataLength) {
//     inputRef.classList.add('valid');
//     inputRef.classList.remove('invalid');
//   }
//   if (inputValueLength === 0) {
//     inputRef.classList.remove('valid');
//     inputRef.classList.remove('invalid');
//   }
//   if (inputValueLength !== inputDataLength && inputValueLength !== 0) {
//     inputRef.classList.add('invalid');
//   }
// }
// var 2

function onBlurBorderColor(event) {
  const inputDataLength = Number(inputRef.dataset.length);
  const inputValueLength = Number(inputRef.value.trim().length);

  if (inputValueLength === inputDataLength) {
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');
  } else {
    inputRef.classList.remove('valid');
    inputRef.classList.add('invalid');
  }
}

// var 2

// function onBlurBorderColor(e) {
//   const inputDataLength = Number(e.currentTarget.dataset.length);
//   const inputValueLength = Number(e.currentTarget.value.trim().length);

//   switch (inputValueLength) {
//     case inputDataLength:
//       //console.log(inputValueLength);
//       inputRef.classList.add('valid');
//       inputRef.classList.remove('invalid');
//       break;
//     case 0:
//       //console.log(inputValueLength);
//       inputRef.classList.remove('invalid');
//       inputRef.classList.remove('valid');
//       break;
//     default:
//       //console.log(inputValueLength);
//       inputRef.classList.add('invalid');
//   }
// }
