let counterValue = 0

const valueItem = document.getElementById("value")
const decrementBtn = document.querySelector('button[data-action="decrement"]')
const incrementBtn = document.querySelector('button[data-action="increment"]')

const handleDecrement = () => {
  counterValue -= 1
  valueItem.innerText = counterValue
}

const handleIncrement = () => {
  counterValue += 1
  valueItem.innerText = counterValue
}

decrementBtn.addEventListener("click", handleDecrement)
incrementBtn.addEventListener("click", handleIncrement)
