let player1Name = '';
let player2Name = '';

const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const resultScreen = document.getElementById('result-screen');
const menuScreen = document.getElementById('menu-screen');

const userChoiceEl = document.getElementById('user-choice');
const botChoiceEl = document.getElementById('bot-choice');
const resultTitle = document.getElementById('result-title');
const resultDetail = document.getElementById('result-detail');

const userNameEl = document.getElementById('user-name');
const botNameEl = document.getElementById('bot-name');

const emojis = {
  Rock: '🪨',
  Paper: '📄',
  Scissors: '✂️'
};

function startGame() {
  const p1 = document.getElementById('player1').value.trim();
  const p2 = document.getElementById('player2').value.trim();
  if (!p1 || !p2) {
    alert('Please enter both player names!');
    return;
  }

  player1Name = p1;
  player2Name = p2;

  userNameEl.textContent = player1Name;
  botNameEl.textContent = player2Name;

  startScreen.classList.add('hidden');
  gameScreen.classList.remove('hidden');
}

function getBotChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}

function getResult(user, bot) {
  if (user === bot) return "It's a tie!";
  if (
    (user === 'Rock' && bot === 'Scissors') ||
    (user === 'Scissors' && bot === 'Paper') ||
    (user === 'Paper' && bot === 'Rock')
  ) return `${player1Name} wins! 🎉`;
  return `${player2Name} wins! 😅`;
}

function animate(el) {
  el.classList.remove('animate');
  void el.offsetWidth;
  el.classList.add('animate');
}

function play(userChoice) {
  const botChoice = getBotChoice();

  userChoiceEl.textContent = emojis[userChoice];
  botChoiceEl.textContent = emojis[botChoice];

  animate(userChoiceEl);
  animate(botChoiceEl);

  const resultText = getResult(userChoice, botChoice);
  setTimeout(() => {
    gameScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    resultTitle.textContent = 'Result';
    resultDetail.textContent = resultText;
    setTimeout(() => {
      resultScreen.classList.add('hidden');
      menuScreen.classList.remove('hidden');
    }, 1500);
  }, 800);
}

function resetGame() {
  resultScreen.classList.add('hidden');
  menuScreen.classList.add('hidden');
  gameScreen.classList.add('hidden');
  startScreen.classList.remove('hidden');

  document.getElementById('player1').value = '';
  document.getElementById('player2').value = '';
  userChoiceEl.textContent = '❔';
  botChoiceEl.textContent = '❔';
}

function continueGame() {
  menuScreen.classList.add('hidden');
  gameScreen.classList.remove('hidden');

  userChoiceEl.textContent = '❔';
  botChoiceEl.textContent = '❔';
}
