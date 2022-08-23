function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}

const boxesEl = document.getElementById("boxes")
const inputEl = document.querySelector("#controls input")
const createBtn = document.querySelector("button[data-create]")
const destroyBtn = document.querySelector("button[data-destroy]")

function createBoxes(amount) {
  let size = 30
  let markup = ""

  for (var i = 0; i < amount; i++) {
    markup += `<div style="background-color:${getRandomHexColor()}; width: ${size}px; height: ${size}px"></div>`
    size += 10
  }

  boxesEl.insertAdjacentHTML("afterbegin", markup)
}

const handleOnCreate = function () {
  handleOnDestroy()
  createBoxes(inputEl.value)
}

const handleOnDestroy = function () {
  boxesEl.innerHTML = ""
}

createBtn.addEventListener("click", handleOnCreate)
destroyBtn.addEventListener("click", handleOnDestroy)
