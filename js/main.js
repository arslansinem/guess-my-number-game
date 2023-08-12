const randomNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 5;

const numberInput = document.querySelector('.number-input');
const submitButton = document.querySelector('.submit-button');
const resultMessage = document.querySelector('.result-message');

submitButton.addEventListener('click', () => {
    const userGuess = parseInt(numberInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
        resultMessage.textContent = 'Please enter a number between 1 and 10.';
        return;
    }

    attempts--;

    if (userGuess === randomNumber) {
        resultMessage.textContent = 'Congrats! You found my number!';
        submitButton.disabled = true;
    } else if (attempts === 0) {
        resultMessage.textContent = `Sorry, the right number was ${randomNumber}. You have no entry left.`;
        submitButton.disabled = true;
    } else {
        resultMessage.textContent = `Wrong guess. Attemps left: ${attempts}`;
    }
});
