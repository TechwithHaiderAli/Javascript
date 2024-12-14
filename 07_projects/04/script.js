// Initialize the game variables
const min = 1;
const max = 100;
const winningNumber = Math.floor(Math.random() * (max - min + 1)) + min;
let attemptsLeft = 5;

// Get elements
const guessInput = document.getElementById('guess-input');
const guessBtn = document.getElementById('guess-btn');
const message = document.getElementById('message');
const resetBtn = document.getElementById('reset-btn');

// Update the range in the UI
document.getElementById('min').textContent = min;
document.getElementById('max').textContent = max;

// Function to display a message
function setMessage(msg, color) {
    message.textContent = msg;
    message.style.color = color;
}

// Check the user's guess
guessBtn.addEventListener('click', () => {
    const guess = parseInt(guessInput.value);

    // Validate input
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}.`, 'red');
        return;
    }

    // Check if the guess is correct
    if (guess === winningNumber) {
        setMessage(`Congratulations! ${winningNumber} is correct. You win!`, 'green');
        guessInput.disabled = true;
        guessBtn.style.display = 'none';
        resetBtn.style.display = 'inline-block';
    } else {
        attemptsLeft -= 1;

        if (attemptsLeft === 0) {
            setMessage(`Game over! The correct number was ${winningNumber}.`, 'red');
            guessInput.disabled = true;
            guessBtn.style.display = 'none';
            resetBtn.style.display = 'inline-block';
        } else {
            setMessage(
                `${guess} is incorrect. You have ${attemptsLeft} attempts left.`,
                'orange'
            );
        }
    }

    // Clear input
    guessInput.value = '';
});

// Reset the game
resetBtn.addEventListener('click', () => {
    location.reload();
});
