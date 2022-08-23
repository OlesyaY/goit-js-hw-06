const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments"
]

const ingredientsList = document.querySelector("#ingredients")

for (let ingredient of ingredients) {
  const liItem = document.createElement("li")

  liItem.textContent = ingredient
  ingredientsList.append(liItem)
}
