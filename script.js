'use strict';

// initialize variables
const player = document.querySelector('.player');
const playerScore = document.querySelector('.player--score');
const cpuScore = document.querySelector('.cpu--score');
const playerRockBtn = document.querySelector('.rock--btn');
const playerPaperBtn = document.querySelector('.paper--btn');
const playerScissorsBtn = document.querySelector('.scissors--btn');
const cpuRock = document.querySelector('.rock--cpu');
const cpuScissors = document.querySelector('.scissors--cpu');
const cpuPaper = document.querySelector('.paper--cpu');
let playerSelectionbtn = '';
const cpuSelect = [
  cpuScissors.textContent,
  cpuPaper.textContent,
  cpuRock.textContent,
];
console.log(cpuSelect);

// game logic
playerRockBtn.addEventListener('click', () => {
  console.log(playerRockBtn.textContent);
  playerSelectionbtn = playerRockBtn.textContent;
  gameLogic(playerSelectionbtn, cpuSelection());
});

playerScissorsBtn.addEventListener('click', () => {
  console.log(playerScissorsBtn.textContent);
  playerSelectionbtn = playerScissorsBtn.textContent;
  gameLogic(playerSelectionbtn, cpuSelection());
});
playerPaperBtn.addEventListener('click', () => {
  console.log(playerPaperBtn.textContent);
  playerSelectionbtn = playerPaperBtn.textContent;
  gameLogic(playerSelectionbtn, cpuSelection());
});

const cpuSelection = function () {
  const randomIndex = Math.floor(Math.random() * cpuSelect.length);
  const cpuChoice = cpuSelect[randomIndex];
  console.log(cpuChoice);
  return cpuChoice;
};
cpuSelection();

const gameLogic = function (playerSelectionbtn, cpuSelect) {
  switch (playerSelectionbtn) {
    case playerRockBtn.textContent:
      if (
        playerSelectionbtn === playerRockBtn.textContent &&
        cpuSelect === cpuRock.textContent
      ) {
        return alert('Draw Game !');
      } else if (
        playerSelectionbtn === playerRockBtn.textContent &&
        cpuSelect === cpuScissors.textContent
      ) {
        playerScore.textContent = Number(playerScore.textContent) + 1;
        return alert('Player Wins!');
      } else if (
        playerSelectionbtn === playerRockBtn.textContent &&
        cpuSelect === cpuPaper.textContent
      ) {
        cpuScore.textContent = Number(cpuScore.textContent) + 1;
        return alert('CPU WINS!');
      }
      break;

    case playerScissorsBtn.textContent:
      if (
        playerSelectionbtn === playerScissorsBtn.textContent &&
        cpuSelect === cpuScissors.textContent
      ) {
        return alert('Draw Game !');
      } else if (
        playerSelectionbtn === playerScissorsBtn.textContent &&
        cpuSelect === cpuPaper.textContent
      ) {
        playerScore.textContent = Number(playerScore.textContent) + 1;
        return alert('Player Wins!');
      } else if (
        playerSelectionbtn === playerScissorsBtn.textContent &&
        cpuSelect === cpuRock.textContent
      ) {
        cpuScore.textContent = Number(cpuScore.textContent) + 1;
        return alert('CPU WINS!');
      }
      break;

    case playerPaperBtn.textContent:
      if (
        playerSelectionbtn === playerPaperBtn.textContent &&
        cpuSelect === cpuPaper.textContent
      ) {
        return alert('Draw Game !');
      } else if (
        playerSelectionbtn === playerPaperBtn.textContent &&
        cpuSelect === cpuRock.textContent
      ) {
        playerScore.textContent = Number(playerScore.textContent) + 1;
        return alert('Player Wins!');
      } else if (
        playerSelectionbtn === playerPaperBtn.textContent &&
        cpuSelect === cpuScissors.textContent
      ) {
        cpuScore.textContent = Number(cpuScore.textContent) + 1;
        return alert('CPU WINS!');
      }
      break;
  }
};
