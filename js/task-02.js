const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments"
]

const liElements = []
const ingredientsList = document.querySelector("#ingredients")

for (let ingredient of ingredients) {
  const liItem = document.createElement("li")

  liItem.className='item'
  liItem.textContent = ingredient

  liElements.push(liItem)
}

ingredientsList.append(...liElements)