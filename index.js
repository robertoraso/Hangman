const wordInput = document.querySelector('input');
const main = document.getElementById('main-container');
const onePlayer = document.getElementById('one-player');
const twoPlayers = document.getElementById('two-players');
let word = '';
const userInput = document.getElementById('letter-input')


async function fetchedWord() {
  {await fetch('https://random-word-api.herokuapp.com/word')
  .then(response => response.json())
  .then(data => {word = String(data[0])});
  let spelling = [...word];
  console.log(word);
  console.log(spelling);
  let wordLetters = (spelling.length);
  };
  function setUserInputs() {
    let gameArea = document.createElement('input');
    gameArea.value = '';
    gameArea.setAttribute('type', 'text');
    gameArea.setAttribute('id', 'letter-input');
    gameArea.setAttribute('placeholder', 'Write here your guessed letter');
    main.appendChild(gameArea);
    onePlayer.setAttribute('class', 'clicked');
    twoPlayers.setAttribute('class', 'clicked');
    onePlayer.textContent = 'GAME ON!';
    twoPlayers.textContent = 'GAME ON!';
    gameArea.addEventListener('keypress', guessLetter);
      };
      setUserInputs();
    };
  
function showInput() {
  wordInput.style.visibility = 'visible';
  onePlayer.setAttribute('class', 'clicked');
  twoPlayers.setAttribute('class', 'clicked');
  onePlayer.textContent = 'GAME ON!';
  twoPlayers.textContent = 'GAME ON';
};

function guessLetter(event) {
  if (KeyboardEvent = 'Enter') {
    console.log(wordInput.value, event.target.value)
  };
};


onePlayer.addEventListener('click', fetchedWord);
twoPlayers.addEventListener('click', showInput);







