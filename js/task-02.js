// декілька варіантів

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsRef = document.querySelector('#ingredients');

const itemsRef = ingredients.map((ingredient) => {
  const item = document.createElement('li');
  item.textContent = ingredient;
  item.classList.add('item');
  return item;
});

ingredientsRef.append(...itemsRef);

// const ingredientsRefs = document.querySelector("#ingredients");
// const ingredientsMarkup = [];

// function createIngredientsList(ingredients = []) {
//   ingredients.map((elem) => {
//     const item = document.createElement("li");
//     item.textContent = elem;
//     item.classList.add("item");
//     ingredientsMarkup.push(item);
//   });
//   ingredientsRefs.append(...ingredientsMarkup);
// }

// createIngredientsList(ingredients);
