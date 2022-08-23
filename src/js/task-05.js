const inputEl = document.getElementById("name-input")
const outputEl = document.getElementById("name-output")

const handleOnInput = function () {
  outputEl.innerHTML = inputEl.value || "Anonymous"
}

inputEl.addEventListener("input", handleOnInput)
