const listCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${listCategories.length}`);

const testFirstCategories =
  document.querySelectorAll(".item").firstElementChild;
console.log(testFirstCategories);

function getCategoryDetails(name, quantity) {
  console.log(`Category: ${name}`);
  console.log(`Elements: ${quantity}`);
}
const firstCategory = document.querySelector("#categories").firstElementChild;
const nextCategory = firstCategory.nextElementSibling;
const lastCategory = document.querySelector("#categories").lastElementChild;

function getNameCategory(item) {
  return item.querySelector("h2").textContent;
}
function getValueCategory(item) {
  return item.querySelector("ul").children.length;
}

getCategoryDetails(
  getNameCategory(firstCategory),
  getValueCategory(firstCategory)
);
getCategoryDetails(
  getNameCategory(nextCategory),
  getValueCategory(nextCategory)
);
getCategoryDetails(
  getNameCategory(lastCategory),
  getValueCategory(lastCategory)
);
