const categories = document.querySelectorAll("#categories .item");
console.log(`У списку ${categories.length} категорії.`);

categories.forEach((category) => {
  const h2 = category.querySelector("h2").textContent;
  const itemsCount = category.querySelectorAll("li").length;

  console.log(`Категорія: ${h2}
Кількість елементів: ${itemsCount}`);
});

const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];

const ingredientsList = document.querySelector("#ingredients");
const elements = ingredients.map((item) => {
  const ingredientsItem = document.createElement("li");
  ingredientsItem.textContent = item;
  return ingredientsItem;
});
ingredientsList.append(...elements);
