function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const spanElemColor = document.querySelector('.color');
const backgroundChangeButton = document.querySelector('.change-color');
const bodyElement = document.body;

backgroundChangeButton.addEventListener('click', onClickColorChange)
function onClickColorChange () {
  const randomColor = getRandomHexColor ();
  spanElemColor.textContent = randomColor;
  bodyElement.style.backgroundColor = randomColor;
  
}
