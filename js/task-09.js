const btnRef = document.querySelector('.change-color');
const textRef = document.querySelector('.color');

btnRef.addEventListener('click', changeColor);

function changeColor() {
  document.body.style.backgroundColor = `${getRandomHexColor()}`;
  textRef.textContent = document.body.style.backgroundColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
