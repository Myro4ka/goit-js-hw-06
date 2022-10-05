const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

function createListIngr(array) {
  const ingrArray = array.map((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    listItem.className = "item";
    return listItem;
  });
  list.append(...ingrArray);
}

createListIngr(ingredients);
