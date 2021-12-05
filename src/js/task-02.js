const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const elementsToCreate = [];

ingredients.forEach((element) => {
  const liToCreate = document.createElement("li");
  liToCreate.textContent = element;
  liToCreate.classList.add("item");

  elementsToCreate.push(liToCreate);
});

const ingredientsList = document.querySelector("ul#ingredients");
ingredientsList.append(...elementsToCreate);