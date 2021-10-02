function computerPlay(){
    let play = ["Rock","Paper","Scissors"];
    return play[Math.floor(Math.random() * play.length)];
}

function playRound(playerSelection, computerSelection){
    if(playerSelection.toLowerCase() === computerSelection.toLowerCase()){
        return 0;
    }
    else if((playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper")||
            (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock")||
            (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors")){
        return -1;
    }
    else{
        return 1;
    }

}

function game(){
    let points = 0;
    let playerSelection;
    let result;


    for(let i = 0; i< 5; i++){
        playerSelection = window.prompt("Select rock, paper or scissor (round "+(i+1)+"): ");
        computerSelection = computerPlay();
        result = playRound(playerSelection,computerPlay());
        points += result;

        if(result === 1){
            console.log("You win the round!")
        }
        else if(result === -1){
            console.log("You lose the round!")
        }
        else{
            console.log("You tied the round!")
        }
    }
    if(points>0){
        console.log("You won the game!")
    }
    else if(points<0){
        console.log("You lose the game!")
    }
    else{
        console.log("You tied the game!")
    }
}


game();