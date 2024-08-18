
function initializeScores() {
  let correctAnswers = localStorage.getItem('correctAnswers');
  let incorrectAnswers = localStorage.getItem('incorrectAnswers');

  
  if (correctAnswers === null) correctAnswers = 0;
  if (incorrectAnswers === null) incorrectAnswers = 0;

  return {
    correctAnswers: parseInt(correctAnswers, 10),
    incorrectAnswers: parseInt(incorrectAnswers, 10)
  };
}


function updateScores(correctAnswers, incorrectAnswers) {
  localStorage.setItem('correctAnswers', correctAnswers);
  localStorage.setItem('incorrectAnswers', incorrectAnswers);
}

function randomLetterPrintIn() {
  let resultTimeout;

 
  let { correctAnswers, incorrectAnswers } = initializeScores();

  document.querySelector('.js-wins').innerHTML = `Correct: ${correctAnswers}`;
  document.querySelector('.js-losses').innerHTML = `Incorrect: ${incorrectAnswers}`;

  document.querySelector('.js-reset-button').addEventListener('click', () => {
    correctAnswers = 0;
    incorrectAnswers = 0;
    document.querySelector('.js-wins').innerHTML = `Correct: ${correctAnswers}`;
    document.querySelector('.js-losses').innerHTML = `Incorrect: ${incorrectAnswers}`;
    updateScores(correctAnswers, incorrectAnswers); // Update localStorage
  });

  document.querySelector('.js-guess-button').addEventListener('click', () => {
    const charCode = Math.floor(Math.random() * 26) + 65;
    const randomLetter = String.fromCharCode(charCode);
    const userGuess = document.querySelector('.js-letter-input').value.trim();
    
    document.querySelector('.js-letter-space').innerHTML = `Computer chose: ${randomLetter}`;

    if (randomLetter === userGuess) {
      document.querySelector('.js-result-space').innerHTML = `Correct`;
      document.querySelector('.js-icon-1').classList.add('visible-1');
      correctAnswers += 1;
    } else {
      document.querySelector('.js-result-space').innerHTML = `Incorrect`;
      document.querySelector('.js-icon-2').classList.add('visible-2');
      incorrectAnswers += 1;
    }

    document.querySelector('.js-wins').innerHTML = `Correct: ${correctAnswers}`;
    document.querySelector('.js-losses').innerHTML = `Incorrect: ${incorrectAnswers}`;

    updateScores(correctAnswers, incorrectAnswers); 

    resultTimeout = setTimeout(() => {
      document.querySelector('.js-result-space').innerHTML = ``;
      document.querySelector('.js-icon-1').classList.remove('visible-1');
      document.querySelector('.js-icon-2').classList.remove('visible-2');
    }, 1500);
  });
}


randomLetterPrintIn();
