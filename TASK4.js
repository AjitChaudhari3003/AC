const randomNumber = Math.floor(Math.random() * 100) + 1; // Generate a random number between 1 and 100
let attempts = 0;

function checkGuess() {
  const guessInput = document.getElementById('guessInput');
  const guess = parseInt(guessInput.value);

  if (isNaN(guess) || guess < 1 || guess > 100) {
    alert("Please enter a valid number between 1 and 100.");
    return;
  }

  attempts++;

  const hint = document.getElementById('hint');

  if (guess === randomNumber) {
    hint.textContent = `Congratulations! You guessed the correct number in ${attempts} attempts!`;
    hint.style.color = 'green';
    guessInput.disabled = true;
  } else if (guess < randomNumber) {
    hint.textContent = "Too low! Try a higher number.";
    hint.style.color = 'blue';
  } else {
    hint.textContent = "Too high! Try a lower number.";
    hint.style.color = 'red';
  }
}
