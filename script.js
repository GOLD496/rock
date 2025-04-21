let humanScore =0;
let computerScore = 0;

let display = document.getElementById("message");
let user = document.getElementById("user");
let robot = document.getElementById("robot");


function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    let comp = document.getElementById("comp");
    switch (choice){
        case 0:
            comp.innerHTML = "the computer chose: rock";
            return "rock";
        case 1:
            comp.innerHTML = "the computer chose: paper";
            return "paper";
        default:
            comp.innerHTML = "the computer chose: scissors";
            return "scissors";

    }
}
function getHumanChoice(){
    document.getElementById("rock").addEventListener("click",()=> {
        playRound("rock",getComputerChoice());

    })
    document.getElementById("paper").addEventListener("click",()=>{

        playRound("paper",getComputerChoice());

    })
    document.getElementById("scissors").addEventListener("click",()=>{ 

        playRound("scissors",getComputerChoice());

    });

}

function playRound(humanchoice,computerchoice){
    if (computerchoice === humanchoice){
        console.log("GAME DRAWN");
        display.innerHTML ="Draw";
    }
    else if ((computerchoice === "rock") && (humanchoice === "paper")){
        console.log("you win");
        humanScore ++;
        user.innerHTML=":"+humanScore;
    }
    else if ((computerchoice === "rock")){
        console.log("you lose");
        display.innerHTML ="you lose";
        computerScore ++;
        robot.innerHTML=":"+computerScore;
    }
    else if ((computerchoice === "paper") && (humanchoice === "scissors")){
        console.log("you win");
        display.innerHTML ="you win";
        humanScore ++;
        user.innerHTML=":"+humanScore;
        return;
    }
    else if ((computerchoice === "paper")){
        console.log("you lose");
        display.innerHTML ="you lose";
        computerScore ++;
        robot.innerHTML=":"+computerScore;
    }
    else if ((computerchoice === "scissors") && (humanchoice === "rock")){
        console.log("you win");
        display.innerHTML ="you win";
        humanScore ++;
        user.innerHTML=":"+humanScore;
        
    }
    else{
        console.log("you lose");
        display.innerHTML ="you lose";
        computerScore ++;
        robot.innerHTML=":"+computerScore;
    }

    if (computerScore >=5) {
        display.innerHTML ="Game over!! you lose";
        document.location.reload();

        return
    }
    else if (humanScore >=5) {
        console.log("Game over!! you win");
        display.innerHTML ="Game over!! you Win!!";
        document.location.reload();

        return
    }
    
    

}




document.getElementById("start").addEventListener("click",()=>{
    getHumanChoice();
});

