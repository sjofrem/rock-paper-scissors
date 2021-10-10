let playerPoints = 0;
let computerPoints = 0;
let Game = true;


function computerPlay(){
    let play = ["rock","paper","scissors"];
    return play[Math.floor(Math.random() * play.length)];
}

function checkGame(){
    if(playerPoints==5 || computerPoints==5){
        Game = false;
        if(playerPoints==5){
            endGame(1);
        }
        else if(computerPoints==5){
            endGame(0);
        }
    }
}

function endGame(ganador){
    const overlay = document.getElementById("overlay");
    const modal = document.getElementById("modal");
    const msg = document.getElementById("endGameMsg");
    overlay.classList.add("active");
    modal.classList.add("active");
    if(ganador==0){
        msg.innerText = "You Lose!";
    }
    else{
        msg.innerText = "You Won!";
    }
}

function retry(){
    const overlay = document.getElementById("overlay");
    const modal = document.getElementById("modal");
    const results = document.getElementById("results");
    const img_player = document.getElementById("box_player");
    const img_cpu = document.getElementById("box_cpu");
    overlay.classList.remove("active");
    modal.classList.remove("active");
    img_player.src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
    img_cpu.src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
    results.innerText = `First to 5 Wins!`;
    playerPoints = 0;
    computerPoints = 0;
    updatePoints();
    Game = true;
}

function playRound(playerSelection, computerSelection){
    const results = document.getElementById("results");
    const img_player = document.getElementById("box_player");
    const img_cpu = document.getElementById("box_cpu");
    
    if(Game){
        if(playerSelection === computerSelection){
            img_player.src=`./images/${playerSelection}.png`;
            img_cpu.src=`./images/${computerSelection}.png`;
            results.innerText = `It's a Tie`;
        }
        else if((playerSelection === "rock" && computerSelection === "paper")||
                (playerSelection === "scissors" && computerSelection === "rock")||
                (playerSelection === "paper" && computerSelection === "scissors")){
            img_player.src=`./images/${playerSelection}.png`;
            img_cpu.src=`./images/${computerSelection}.png`;
            results.innerText = `You win the round!`;
            playerPoints++;
        }
        else{
            img_player.src=`./images/${playerSelection}.png`;
            img_cpu.src=`./images/${computerSelection}.png`;
            results.innerText = `You lose the round!`;
            computerPoints++;
        }
        updatePoints();
        checkGame();
    }

    else{
        checkGame();
    }

    

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
const retryBtn = document.querySelector('.btn-retry');

rockBtn.addEventListener('click', () => playRound("rock", computerPlay()));
paperBtn.addEventListener('click', () => playRound("paper", computerPlay()));
scissorsBtn.addEventListener('click', () => playRound("scissors", computerPlay()));
retryBtn.addEventListener('click', () => retry());