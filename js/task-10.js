const boxesRef = document.querySelector('#boxes');
const btnCreateRef = document.querySelector('button[data-create]');
const btnDestroyRef = document.querySelector('button[data-destroy]');
const inputRef = document.querySelector('input');

btnCreateRef.addEventListener('click', addBoxes);
btnDestroyRef.addEventListener('click', destroyBoxes);

function addBoxes() {
  createBoxes(Number(inputRef.value));
}

function createBoxes(amount) {
  let markup = ``;
  for (let i = 1, num = 30; i <= amount; i += 1, num += 10) {
    markup += `<div style="background-color:${getRandomHexColor()};width:${num}px;height:${num}px"></div>`;
  }
  boxesRef.innerHTML = markup;

  // const arr = [];
  // let size = 20;
  // for (let i = 0; i < amount; i += 1) {
  //   const div = document.createElement('div');
  //   div.style = `background-color:${getRandomHexColor()};width:${size += 10}px;height:${size += 10}px`;
  //   arr.push(div)
  // }
  // boxesRef.append(...arr);
}

function destroyBoxes() {
  boxesRef.innerHTML = '';
  inputRef.value = 0;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
