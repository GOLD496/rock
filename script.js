let humanScore =0;
let computerScore = 0;

function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    switch (choice){
        case 0:
            return "rock";
        case 1:
            return "paper";
        default:
            return "scissors";

    }
}
function getHumanChoice(){
    return prompt("Enter your choice: ","Rock").toLowerCase().trim();
}

function playRound(humanchoice,computerchoice){
    if (computerchoice === humanchoice){
        console.log("GAME DRAWN");
    }
    else if ((computerchoice === "rock") && (humanchoice === "paper")){
        console.log("you win");
        humanScore ++;
    }
    else if ((computerchoice === "rock")){
        console.log("you lose");
        computerScore ++;
    }
    else if ((computerchoice === "paper") && (humanchoice === "scissors")){
        console.log("you win");
        humanScore ++;
        return;
    }
    else if ((computerchoice === "paper")){
        console.log("you lose");
        computerScore ++;
    }
    else if ((computerchoice === "scissors") && (humanchoice === "rock")){
        console.log("you win");
        humanScore ++;
        return;
    }
    else{
        console.log("you lose");
        computerScore ++;
    }
    
    

}
function playGame(){
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(),getComputerChoice());
        
    }
    if (computerScore > humanScore) {
        console.log("Game over!! you lose");
    }
    else if (computerScore < humanScore) {
        console.log("Game over!! you win");
    }
    else{
        console.log("Game over!! draw");
    }
   
    
}

playGame();

