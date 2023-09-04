'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
//document.querySelector('.number').textContent = number;

function lose() {
  document.querySelector('.message').textContent = 'you lose';
  document.querySelector('.score').textContent = 0;
  document.querySelector('body').style.backgroundColor = 'darkRed';
}

let score = 20;
let highscore = 0;

const guessing = function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(typeof guess, guess);
  //too high
  if (guess > number) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      lose();
    }
    //too low
  } else if (guess < number) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      lose();
    }

    //when player wins
  } else if (guess === number) {
    document.querySelector('.message').textContent = 'Correct Number';
    document.querySelector('.number').textContent = number;
    document.querySelector('.check').textContent = 'Congratulations!';

    //bg color
    document.querySelector('body').style.backgroundColor = '#60b347';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //no input
  } else {
    document.querySelector('.message').textContent = 'No Number!';
  }
};

const playAgain = function () {
  document.querySelector('body').style.backgroundColor = '#222';
  number = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.check').textContent = 'Check!';
  document.querySelector('.guess').value = '';
};

document.querySelector('.check').addEventListener('click', guessing);
document.querySelector('.again').addEventListener('click', playAgain);
