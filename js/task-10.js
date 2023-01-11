function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const boxes = document.querySelector('#boxes');

function createBoxes(amount) {
  const boxesArr = [];
  for (let index = 0; index < amount; index += 1) {
    const num = 30 + index * 10;
    boxesArr.push(
      `<div style="width: ${num}px; height:${num}px; background:${getRandomHexColor()}"></div>`
    );
  }

  boxes.insertAdjacentHTML('beforeend', boxesArr.join(''));
  
}

function destroyBoxes() {
    const boxes2Remove = document.querySelectorAll('#boxes div');
    boxes2Remove.forEach(value => {
      value.remove();
    });
}

const inputAmountBoxes = document.querySelector('#controls input');
const addBoxes = document.querySelector('#controls [data-create]');


  
  
  addBoxes.addEventListener('click', () => {
    let amount = inputAmountBoxes.value;
    createBoxes(amount);
    amount = 0;
    document.querySelector('#controls input').value = '';
  });


const btnRemoveBoxes = document.querySelector('#controls [data-destroy]');
btnRemoveBoxes.addEventListener('click', () => {
    destroyBoxes();
});

