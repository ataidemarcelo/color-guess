console.log('Project Color Guess!!!');

function generateColor() {
  const boxBalls = document.getElementById('box-balls');

  for (let index = 1; index <= 6; index += 1) {
    const divBall = document.createElement('div');
    divBall.className = 'ball';
    divBall.style.backgroundColor = 'black';

    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    divBall.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    boxBalls.appendChild(divBall);
  }
}

generateColor();
