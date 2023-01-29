const btnRef = document.querySelector('.change-color');
const textRef = document.querySelector('.color');

btnRef.addEventListener('click', changeColor);

function changeColor() {
  textRef.textContent = getRandomHexColor();
  document.body.style.backgroundColor = `${getRandomHexColor()}`;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
