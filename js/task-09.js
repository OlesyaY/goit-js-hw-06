function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}

const body = document.querySelector("body")
const colorTextEl = document.querySelector(".color")
const changeColorBtn = document.querySelector(".change-color")

const handleOnChangeColor = function () {
  const color = getRandomHexColor()

  colorTextEl.textContent = color
  body.style.backgroundColor = color
}

handleOnChangeColor()

changeColorBtn.addEventListener("click", handleOnChangeColor)
