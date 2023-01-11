function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyStyle = document.querySelector('body');
const changeColor = document.querySelector('.change-color');
const textColor = document.querySelector('.color');

changeColor.addEventListener('click', event => { 
  const color = getRandomHexColor();
  textColor.textContent = color;
  bodyStyle.style.backgroundColor = color;
  
})