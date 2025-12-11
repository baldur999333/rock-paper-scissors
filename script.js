
function getRandomInteger(max){
    return Math.floor(Math.random()*max);
}

function getComputerChoice(){
    const num = getRandomInteger(3);
    switch(num){
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    }
};

function getHumanChoice(){
    const choice = prompt("Enter 'rock', 'paper' or 'scissors'.");
    return choice;
}

let playerScore = 0;
let compScore = 0;

function playRound(choice){
    if(playerScore == 5){
        alert("The player has won!")
        return;
    }
    if(compScore == 5){
        alert("The computer has won!");
        return;
    }
    let computerChoice = getComputerChoice();
    console.log("Computer: "+computerChoice);
    let humanChoice = choice;
    humanChoice = humanChoice.toLocaleLowerCase();
    
    const resultContainer = document.querySelector(".result-container");
    const score = document.querySelector(".score");
    if(humanChoice == computerChoice){
        resultContainer.textContent = "It's a tie";
        console.log("It's a tie");
        return 'N'; //tie so no score increase
    }
    if(humanChoice == "rock" && computerChoice == "scissors"){
        resultContainer.textContent = "You win! Rock beats Scissors.";
        console.log("You win! Rock beats Scissors.")
        score.textContent = `Player: ${++playerScore}\tCPU: ${compScore}`;
        return 'H'
    }
    else if(humanChoice == "paper" && computerChoice == "rock"){
        resultContainer.textContent = "You win! Paper beats Rock.";
        console.log("You win! Paper beats Rock.")
        score.textContent = `Player: ${++playerScore}\tCPU: ${compScore}`;
        return 'H'
    }
    else if(humanChoice == "scissors" && computerChoice == "paper"){
        resultContainer.textContent = "You win!  Scissors beat Paper.";
        console.log("You win!  Scissors beat Paper.")
        score.textContent = `Player: ${++playerScore}\tCPU: ${compScore}`;
        return 'H'
    }
    else{
        if(humanChoice == "rock"){
            resultContainer.textContent = "You lose! Paper beats Rock.";
            console.log("You lose! Paper beats Rock.")
        score.textContent = `Player: ${playerScore}\tCPU: ${++compScore}`;}
        else if(humanChoice == "paper"){
            resultContainer.textContent = "You lose! Scissors beat Paper.";
            console.log("You lose! Scissors beat Paper.")
        score.textContent = `Player: ${playerScore}\tCPU: ${++compScore}`;}
        else if(humanChoice == "scissors"){
            resultContainer.textContent = "You lose! Rock beats Scissors.";
            console.log("You lose! Rock beats Scissors.");
        score.textContent = `Player: ${playerScore}\tCPU: ${++compScore}`;}
    }
    if(playerScore == 5){
        alert("The player has won!")
        return;
    }
    if(compScore == 5){
        alert("The computer has won!");
        return;
    }
}

function playGame(rounds = 5){
    let humanScore = 0
    let computerScore = 0
    for(let i=0; i<rounds; ++i){
        switch(playRound()){
            case 'H':{
                ++humanScore;
                break;
            }
            case 'C':{
                ++computerScore;
                break;
            }
        }

    }
    if(humanScore == computerScore){
        console.log("The game ended in a tie!");
    }
    else if(humanScore > computerScore){
        console.log("The player won the game!");
    }
    else{
        console.log("the computer won the game!");
    }
}



// playGame();

let buttonContainer = document.querySelector(".btn-container");
buttonContainer.addEventListener("click", (e) =>{
    let target = e.target;
    switch(target.id){
        case "rock":{
            playRound("rock")
            break;
        }
        case "paper":{
            playRound("paper");
            break;
        }
        case "scissors":{
            playRound("scissors");
            break;
        }
    }
});