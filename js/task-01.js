const listCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${listCategories.length}`);

function getCategoryDetails(list) {
  for (let item of list) {
    console.log(`Category: ${item.querySelector("h2").textContent}`);
    console.log(`Elements: ${item.querySelector("ul").children.length}`);
  }
}

getCategoryDetails(listCategories);
