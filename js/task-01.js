// var 1
const categoriesRef = document.getElementById("categories");
const listCategories = categoriesRef.children;
const lengthAmountCategories = listCategories.length;
console.log("Number of categories: ", lengthAmountCategories);

for (let category of listCategories) {
  console.log("Category: ", category.firstElementChild.textContent);
  console.log("Elements: ", category.lastElementChild.children.length);
}

// var 2
const categoriesAll = document.querySelector("#categories");
const categoriesLength = categoriesAll.children.length;
console.log(`Number of categories: ${categoriesLength}`);

const itemsElement = document.querySelectorAll(".item");
itemsElement.forEach((item) => {
  console.log("Category: ", item.firstElementChild.textContent);
  console.log("Elements: ", item.lastElementChild.children.length);
});

// var 3
const categoriesEl = document.getElementById("categories").children.length;
console.log(`Number of categories: ${categoriesEl}`);

const arrayTitlesCategoriesRef = document.querySelectorAll("h2");
arrayTitlesCategoriesRef.forEach((title) => {
  console.log("Category:", title.textContent);
  console.log("Elements:", title.nextElementSibling.children.length);
});

// 4
const categories = document.querySelectorAll("li.item");
console.log("Number of categories: " + categories.length);

for (const category of categories) {
  console.log("Category: " + category.firstElementChild.innerHTML);
  console.log("Elements: " + category.lastElementChild.children.length);
}

// 5
const categoriesAllRef = document.querySelectorAll("li.item");
console.log("Number of categories: ", categoriesAllRef.length);
const infoOfItem = [...categoriesAllRef].map((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});

console.log("Number of categories: ", categoriesAllRef.length);
const getInfoOfItems = [...categoriesAllRef]
  .map(
    (item) =>
      `Category: ${item.firstElementChild.textContent}
    Elements: ${item.lastElementChild.children.length}`
  )
  .join("\n");
console.log(getInfoOfItems);
