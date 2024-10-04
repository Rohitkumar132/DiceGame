'use strict';

const playerEl0 = document.querySelector('.player--0');
const playerEl1 = document.querySelector('.player--1');
let current0 = document.querySelector('#current--0');
const current1 = document.getElementById('current--1');
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const holdBtn = document.querySelector('.btn--hold');
const newBtn = document.querySelector('.btn--new');
console.log(current0);
let playerActive = true;
// let score = 0;
let current = 0;
// let curnt = 0;
let activePlayer0 = 0;
let scores = [0, 0];
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer0}`).textContent = 0;
  activePlayer0 = activePlayer0 === 0 ? 1 : 0;
  current = 0;
  playerEl0.classList.toggle('player--active');
  playerEl1.classList.toggle('player--active');
};

const dice = document.querySelector('.dice');
console.log(dice);
dice.classList.add('hidden');

score0.textContent = 0;
score1.textContent = 0;

const diceRoll = document.querySelector('.btn--roll');
diceRoll.addEventListener('click', function () {
  if (playerActive) {
    let secretNumber = Math.floor(Math.random() * 6) + 1;
    dice.src = `dice-${secretNumber}.png`;
    dice.classList.remove('hidden');
    if (secretNumber !== 1) {
      current += secretNumber;
      document.getElementById(`current--${activePlayer0}`).textContent =
        current;
    } else {
      switchPlayer();
    }
  }
});
holdBtn.addEventListener('click', function () {
  if (playerActive) {
    current;

    scores[activePlayer0] += current;
    document.getElementById(`score--${activePlayer0}`).textContent =
      scores[activePlayer0];
    document.getElementById(`current--${activePlayer0}`).textContent = 0;
    console.log();

    if (scores[0] >= 100) {
      playerEl0.classList.add('name');
      playerEl0.classList.add('player--winner');
      dice.classList.add('hidden');
      playerActive = false;
      // player = activePlayer0 = true ? 0 : 1 ;
      document.querySelector('.player--active').classList.add('player--winner');
    } else if (scores[1] >= 100) {
      playerActive = false;
      dice.classList.add('hidden');
      // player = activePlayer0 = true ? 1 : 0 ;
      playerEl1.classList.add('player--winner');
      document.querySelector('.player--active').classList.add('player--winner');
    }

    switchPlayer();
  }
});

newBtn.addEventListener('click', function () {
  playerActive = true;
  score0.textContent = 0;
  score1.textContent = 0;
  scores = [0, 0];
  current0.textContent = 0;
  current1.textContent = 0;
  dice.classList.add('hidden');
  activePlayer0 = 0;
  playerEl0.classList.remove('player--winner');
  playerEl1.classList.remove('player--winner');
  playerEl0.classList.add('player--active');
  playerEl1.classList.remove('player--active');
});
