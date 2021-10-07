let playerPoints = 0;
let computerPoints = 0;

function computerPlay(){
    let play = ["Rock","Paper","Scissors"];
    return play[Math.floor(Math.random() * play.length)];
}

function playRound(playerSelection, computerSelection){
    const results = document.getElementById("results");
    if(playerSelection.toLowerCase() === computerSelection.toLowerCase()){
        results.innerText = `It's a Tie`;
    }
    else if((playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper")||
            (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock")||
            (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors")){
        results.innerText = `You Win!`;
        playerPoints++;
    }
    else{
        results.innerText = `You Lose!`;
        computerPoints++;
    }
    updatePoints();

}

function updatePoints(){
    const player = document.getElementById("player");
    const cpu = document.getElementById("cpu");

    player.innerText = playerPoints;
    cpu.innerText = computerPoints;

}


const rockBtn = document.querySelector('#Rock');
const paperBtn = document.querySelector('#Paper');
const scissorsBtn = document.querySelector('#Scissors');

rockBtn.addEventListener('click', () => playRound("rock", computerPlay()));
paperBtn.addEventListener('click', () => playRound("paper", computerPlay()));
scissorsBtn.addEventListener('click', () => playRound("scissors", computerPlay()));