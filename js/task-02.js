const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('#ingredients');

const markup = ingredients.map(el => {
  const li = document.createElement('li');
  li.textContent = el;
  li.classList.add('item');
  return li;
  });

list.append(...markup);

