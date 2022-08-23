const inputEl = document.getElementById("validation-input")
const SYMBOLS_LENGTH = Number.parseInt(inputEl.dataset.length)

const handleOnBlur = function () {
  inputEl.className = ""
  const validationClass =
    SYMBOLS_LENGTH === inputEl.value.length ? "valid" : "invalid"
  inputEl.classList.add(validationClass)
}

inputEl.addEventListener("blur", handleOnBlur)
