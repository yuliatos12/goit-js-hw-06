const inputRef = document.getElementById("font-size-control");
const textRef = document.getElementById("text");

inputRef.addEventListener('input', onInputResize);
function onInputResize () {
    const fontSizeValue = inputRef.value;
  textRef.style.fontSize = `${fontSizeValue}px`;
}
onInputResize()