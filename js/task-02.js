const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('#ingredients');
const ar = [];
ingredients.forEach(element => {
  const li = document.createElement('li');
  li.textContent = element;
  li.classList.add('item'); 
  ar.push(li);
 
});
list.append(...ar);
