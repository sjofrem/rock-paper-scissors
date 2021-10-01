function computerPlay(){
    let play = ["Rock","Paper","Scissors"];
    return play[Math.floor(Math.random() * play.length)];
}

console.log(computerPlay());