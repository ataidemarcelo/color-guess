console.log('Project Color Guess!!!');
let color = '';

function generateGuess(rgb) {
  const boxRgb = document.getElementById('box-rgb');
  const p = document.createElement('p');
  p.id = 'rgb-color';
  p.innerText = `(${rgb[0]},${rgb[1]},${rgb[2]})`;
  boxRgb.appendChild(p);

  const colorRgb = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
  return colorRgb;
}

function generateRgb() {
  const rgb = [];
  rgb[0] = Math.floor(Math.random() * 255);
  rgb[1] = Math.floor(Math.random() * 255);
  rgb[2] = Math.floor(Math.random() * 255);
  return rgb;
}

function generateColors() {
  const boxBalls = document.getElementById('box-balls');
  const num = Math.floor(Math.random() * 6) + 1;

  for (let index = 1; index <= 6; index += 1) {
    const divBall = document.createElement('div');
    divBall.className = 'ball';

    const rgb = generateRgb();

    if (num === index) {
      color = generateGuess([rgb[0], rgb[1], rgb[2]]);
    }

    divBall.style.backgroundColor = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
    boxBalls.appendChild(divBall);
  }
}

const answer = document.getElementById('answer');
const scoreElement = document.getElementById('score');
let score = 0;

function win(item, colorGuess) {
  const ele = item;
  ele.addEventListener('click', (event) => {
    if (colorGuess === event.target.style.backgroundColor) {
      ele.style.border = '5px solid blue';
      answer.innerText = 'Acertou!';
      score += 3;
      scoreElement.innerText = `${score}`;
    } else {
      ele.style.border = '5px solid red';
      answer.innerText = 'Errou! Tente novamente!';
      score -= 1;
      scoreElement.innerText = `${score}`;
    }
  });
}

function checkWin(collection, colorGuess) {
  for (let index = 0; index < collection.length; index += 1) {
    win(collection[index], colorGuess);
  }
}

const balls = document.getElementsByClassName('ball');

generateColors();
checkWin(balls, color);

function deleteColors() {
  const colors = document.querySelectorAll('.ball');
  const rgbColor = document.getElementById('rgb-color');
  rgbColor.remove();
  for (let index = 0; index < colors.length; index += 1) {
    colors[index].remove();
  }
}

function resetGame() {
  answer.innerText = 'Escolha uma cor';
  deleteColors();
  generateColors();
  checkWin(balls, color);
}

const btnResetGame = document.getElementById('reset-game');

btnResetGame.addEventListener('click', resetGame);
