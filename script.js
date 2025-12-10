
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

function playRound(){
    let computerChoice = getComputerChoice();
    // console.log("Computer: "+computerChoice);
    let humanChoice = getHumanChoice();
    humanChoice = humanChoice.toLocaleLowerCase();
    

    if(humanChoice == computerChoice){
        console.log("It's a tie");
        return 'N'; //tie so no score increase
    }
        

    if(humanChoice == "rock" && computerChoice == "scissors"){
        console.log("You win! Rock beats Scissors.")
        return 'H'
    }
    else if(humanChoice == "paper" && computerChoice == "rock"){
        console.log("You win! Paper beats Rock.")
        return 'H'
    }
    else if(humanChoice = "scissors" && computerChoice == "paper"){
        console.log("You win!  Scissors beat Paper.")
        return 'H'
    }
    else{
        if(humanChoice == "rock")
            console.log("You lose! Paper beats Rock.")
        else if(humanChoice = "paper")
            console.log("You lose! Scissors beat Paper.")
        else if(humanChoice = "scissors")
            console.log("You lose! Rock beats Scissors.");
    }
    return 'C'
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

playGame();
