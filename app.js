const result = document.getElementById('result');

function createRandomArray() {
  const arr = [];

  for (let i = 0; i < 4; i++) {
    arr.push(Math.floor(Math.random() * 10));
  }

  return arr;
}

function renderBlocks(numbers) {
  result.innerHTML = '';

  numbers.forEach(num => {
    const div = document.createElement('div');
    div.className = 'digit';
    div.textContent = num;
    result.appendChild(div);
  });
}

function generatePassword() {
  const numbers = createRandomArray();
  renderBlocks(numbers);
}

generatePassword();
