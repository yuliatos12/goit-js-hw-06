const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientList = document.getElementById('ingredients');

const listElements = ingredients.map(ingredient => {
const listElement = document.createElement('li');
listElement.textContent = ingredient;
listElement.classList.add('item');
return listElement;
})
ingredientList.append(...listElements);


