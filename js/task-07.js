const textEl = document.getElementById("text")
const inputEl = document.getElementById("font-size-control")

const handleOnInput = () => (textEl.style.fontSize = `${inputEl.value}px`)

inputEl.addEventListener("input", handleOnInput)
