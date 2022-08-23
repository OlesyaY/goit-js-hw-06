const categoriesList = document.querySelector("#categories")

console.log(`Number of categories: ${categoriesList.children.length}`)

for (let listItem of categoriesList.children) {
  console.log(`Category: ${listItem.firstElementChild.innerText}`)
  console.log(`Elements: ${listItem.lastElementChild.children.length}`)
}
