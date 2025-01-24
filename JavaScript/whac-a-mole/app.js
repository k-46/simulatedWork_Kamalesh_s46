const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeLeft = document.querySelector('#timeLeft');
const score = document.querySelector('#result');

let result = 0;
let targetPosition;
let currentTimr = 60;
let timerId = null;

function randomSquare(){
    squares.forEach(square => {
        square.classList.remove('mole');
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)];
    randomSquare.classList.add('mole');

    targetPosition = randomSquare.id;
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if(square.id == targetPosition) {
            result++;
            score.textContent = result;
            targetPosition = null;
        }
    })
})

function moveMole() {
    timerId = setInterval(randomSquare, 500);
}

function countDown(){
    currentTimr--;
    timeLeft.textContent = currentTimr;

    if(currentTimr == 0){
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert('GAMEOVER! Your final score is ' + result);


    }
}

moveMole();
let countDownTimerId = setInterval(countDown, 1000);



// "https://github.com/Kalvium-Program/Image-files/blob/main/mole.jpg?raw=true";