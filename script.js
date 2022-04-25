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
    divBall.style.backgroundColor = 'black';

    const rgb = generateRgb();

    if (num === index) {
      color = generateGuess([rgb[0], rgb[1], rgb[2]]);
    }

    divBall.style.backgroundColor = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
    boxBalls.appendChild(divBall);
  }
}

function checkWin(collection, colorGuess) {
  const answer = document.getElementById('answer');
  for (let index = 0; index < collection.length; index += 1) {
    collection[index].addEventListener('click', (event) => {
      if (colorGuess === event.target.style.backgroundColor) {
        answer.innerText = 'Acertou!';
      } else {
        answer.innerText = 'Errou! Tente novamente!';
      }
    });
  }
}

const balls = document.getElementsByClassName('ball');

generateColors();
checkWin(balls, color);
