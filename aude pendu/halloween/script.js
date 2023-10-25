const words = ["citrouille", "sorciere",  "momie", "araignee", "bonbons"];
let selectedWord = words[Math.floor(Math.random() * words.length)];
let guessedWord = new Array(selectedWord.length).fill('_');
let incorrectLetters = [];
let attempts = 6;

const wordDisplay = document.getElementById('word-display');
const attemptsDisplay = document.getElementById('attempts');
const incorrectLettersDisplay = document.getElementById('incorrect-letters');

wordDisplay.textContent = guessedWord.join(' ');

document.getElementById('guess-button').addEventListener('click', function () {
    const letterInput = document.getElementById('letter-input');
    const letter = letterInput.value.toLowerCase();
    letterInput.value = '';

    if (selectedWord.includes(letter)) {
        for (let i = 0; i < selectedWord.length; i++) {
            if (selectedWord[i] === letter) {
                guessedWord[i] = letter;
            }
        }
        wordDisplay.textContent = guessedWord.join(' ');
    } else {
        incorrectLetters.push(letter);
        incorrectLettersDisplay.textContent = incorrectLetters.join(', ');
        attempts--;
        attemptsDisplay.textContent = attempts;
    }

    if (guessedWord.join('') === selectedWord) {
        wordDisplay.textContent = `Félicitations ! Le mot était "${selectedWord}"`;
       document.getElementById('victory-gif').style.display = 'block';

    }

    if (attempts === 0) {
        wordDisplay.textContent = `Désolé, vous avez perdu. Le mot était "${selectedWord}"`;
        document.getElementById('defeat-gif').style.display = 'block';
    }
});
fetch('halloween_words.json') 
    .then(response => response.json())
    .then(data => {
        
        console.log(halloween_words.json); 
    })
    .catch(error => console.error('Erreur :', error));
