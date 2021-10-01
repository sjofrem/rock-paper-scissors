function computerPlay(){
    let play = ["Rock","Paper","Scissors"];
    return play[Math.floor(Math.random() * play.length)];
}

function playRound(playerSelection, computerSelection){
    if(playerSelection.toLowerCase() === computerSelection.toLowerCase()){
        return "It's a tie!";
    }
    else if((playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper")||(playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock")||(playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors")){
        return "You lose!";
    }
    else{
        return "You Win!"
    }

}

console.log(playRound("rock","paper"));