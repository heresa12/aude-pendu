(() => {
  
    const REMAINING_TRY = document.getElementById('remainingTry');
    const board = document.getElementById('board');
    const keyboard = document.getElementById('keyboard');
    const winGif = document.getElementById('victoryGif');
    const loseGif = document.getElementById('defaetGif');
    let remainingTry =10;

    const Alphabet = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
        'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];
    const wordList = ["javascript",
        "callback",
        "fonction",
        "recurcive",
        "responsive",
        "serveur",
        "navigateur",
        "script",
        "index",
        "style",
        "document",
        "body",
        "boucle",
        "condition",
        "variable"];

    const secretWord = wordList[Math.floor(Math.random() * wordList.length)];

    Alphabet.forEach((l) => {
        keyboard.innerHTML += `<div class="letters" id="l${l}">${l}</div>`;
    });

    for (let i = 1; i <= secretWord.length; i++) {
        board.textContent += '_';
    }

    board.textContent = board.textContent.replace(' ', '');

    const letters = [...document.querySelectorAll('.letters')];

    function clickLetter(l) {
        let clickedLetter = document.getElementById(l.target.id);
        if (secretWord.includes(clickedLetter.textContent)) {
            let indexOfLetter = [];
            for (let i = 0; i < secretWord.length; i++) {
                if (secretWord[i] === clickedLetter.textContent) {
                    indexOfLetter.push(i);
                }
            }
            let splitBoard = board.textContent.split('');
            for (let i = 0; i < indexOfLetter.length; i++) {
                splitBoard[indexOfLetter[i]] = clickedLetter.textContent;
            }
            board.textContent = splitBoard.join('');
        } else {
            remainingTry--;
            REMAINING_TRY.textContent = remainingTry;
        }

       
        if (board.textContent === secretWord) {
            board.textContent = 'Bravo, Le mot était bien : ' + secretWord;
            board.style.color = 'green';
            keyboard.style.display = 'none';
            victoryGif.style.display = 'block';
            setTimeout(() => {
                document.location.reload();
            }, 2000);
        } else if (remainingTry === 0) {
            board.textContent = 'Le mot était : ' + secretWord;
            board.style.color = 'red';
            keyboard.style.display = 'none';
            defeatGif.style.display = 'block';
            setTimeout(() => {
                document.location.reload();
            }, 2000);
        }
        clickedLetter.textContent = '';
    }

    letters.forEach((l) => {
        l.addEventListener('click', clickLetter);
    });
})();