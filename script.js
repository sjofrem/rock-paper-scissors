let playerPoints = 0;
let computerPoints = 0;

function computerPlay(){
    let play = ["rock","paper","scissors"];
    return play[Math.floor(Math.random() * play.length)];
}

function playRound(playerSelection, computerSelection){
    const results = document.getElementById("results");
    const img_player = document.getElementById("box_player");
    const img_cpu = document.getElementById("box_cpu");
    if(playerSelection.toLowerCase() === computerSelection.toLowerCase()){
        img_player.src=`./images/${playerSelection}.png`;
        img_cpu.src=`./images/${computerSelection}.png`;
        results.innerText = `It's a Tie`;
    }
    else if((playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper")||
            (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock")||
            (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors")){
        img_player.src=`./images/${playerSelection}.png`;
        img_cpu.src=`./images/${computerSelection}.png`;
        results.innerText = `You Win!`;
        playerPoints++;
    }
    else{
        img_player.src=`./images/${playerSelection}.png`;
        img_cpu.src=`./images/${computerSelection}.png`;
        results.innerText = `You Lose!`;
        computerPoints++;
    }
    updatePoints();

}

function updatePoints(){
    const player = document.getElementById("player_score");
    const cpu = document.getElementById("cpu_score");

    player.innerText = "Player: "+playerPoints;
    cpu.innerText = "Computer: "+computerPoints;

}


const rockBtn = document.querySelector('#Rock');
const paperBtn = document.querySelector('#Paper');
const scissorsBtn = document.querySelector('#Scissors');

rockBtn.addEventListener('click', () => playRound("rock", computerPlay()));
paperBtn.addEventListener('click', () => playRound("paper", computerPlay()));
scissorsBtn.addEventListener('click', () => playRound("scissors", computerPlay()));