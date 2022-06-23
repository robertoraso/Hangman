const wordInput = document.querySelector('input');
const main = document.getElementById('main-container');
const onePlayer = document.getElementById('one-player');
const twoPlayers = document.getElementById('two-players');
let word = '';
const lettersMisteryWord = [];
let spelling = [];

async function fetchedWord() {
  {await fetch('https://random-word-api.herokuapp.com/word')
  .then(response => response.json())
  .then(data => {word = String(data[0])});
  spelling = [...word];
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
    gameArea.setAttribute('minlength', '1');
    gameArea.setAttribute('maxlength', '1');
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

 function wrongLetter() {
    let missingLetter = document.createElement('span');
    missingLetter.textContent = 'Not this time!';
    main.appendChild(missingLetter);
    setTimeout(()=> main.removeChild(missingLetter), 3000);
  };

  function rightLetter(letter) {
    const lettersOfWord = lettersMisteryWord.join('');
    if (document.querySelector('.correct-letters')) {
      document.querySelector('.correct-letters').textContent = lettersOfWord;
    } else {
      let correctLetter = document.createElement('div'); 
        correctLetter.setAttribute('class', 'correct-letters');
        correctLetter.textContent = letter;
        main.appendChild(correctLetter);
      };
      console.log('1', spelling.join(''));
      console.log('2', lettersOfWord);
    if (spelling.join('') === lettersOfWord) {
      victoryMessage(); 
    };
  };

function guessLetter(event) {
  if (event.key === 'Enter') {
    lettersMisteryWord.push(event.target.value);
    rightLetter(event.target.value);
    if (word.includes(event.target.value)) {
      console.log('yes');
    }else{
      wrongLetter();
    };
  };
  event.target.value = '';
};

function victoryMessage() {
  const victoryAnnouncement = document.createElement('span');
  victoryAnnouncement.textContent = 'Player 1 won!';
  main.appendChild(victoryAnnouncement);
  console.log(victoryAnnouncement);
  setTimeout(()=> main.removeChild(victoryAnnouncement), 4500);
}

onePlayer.addEventListener('click', fetchedWord);
twoPlayers.addEventListener('click', showInput);
wordInput.addEventListener('keypress', guessLetter);







