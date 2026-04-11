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

const gallery = document.querySelector("#gallery");
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const markup = images
  .map((item) => {
    return `<li><img src="${item.url}" alt="${item.alt}"></li>
`;
  })
  .join("");
gallery.insertAdjacentHTML("beforeend", markup);
