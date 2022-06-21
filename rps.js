function computerPlay() {
    const opt = ["rock", "paper", "scissors"];
    const rand = parseInt(Math.random() * 3);
    return opt[rand];
}

function playRound(playerSelection, computerSelection) {
    let flag = 0;

    switch(playerSelection.toLowerCase()) {
        case "rock": 
            switch(computerSelection){
                case "rock": 
                break;
                case "paper": flag = 1;
                break;
                case "scissors": flag = 2;
                break;
            }
        break;
        case "paper": 
            switch(computerSelection){
                case "paper": 
                break;
                case "scissors": flag = 1;
                break;
                case "rock": flag = 2;
                break;
            }
        break;
        case "scissors": 
            switch(computerSelection){
                case "scissors":
                break;
                case "rock": flag = 1;
                break;
                case "paper": flag = 2;
                break;
            }
        break;
        default: flag = 3;
    }

    return flag;

    
}

function game() {
    let playerScore = 0, computerScore = 0;
    for(let i = 0; i < 5; i++){
        const computerSelection = computerPlay();
        const playerSelection = prompt("Choice rock, paper, or scissors", "rock");
        const res = playRound(playerSelection, computerSelection);
        
        switch(res) {
            case 0: 
                console.log("Draw!");
            break;
            case 1: 
                console.log("You Lose! " + computerSelection + " beats " + playerSelection);
                computerScore++;
            break;
            case 2: 
                console.log("You Win! " + playerSelection + " beats " + computerSelection);
                playerScore++;
            break;
            case 3: 
                console.log("Invalid Choice!");
                i--;
            break;
        }
    }

    if(computerScore > playerScore)
        console.log("Computer Wins " + computerScore + " vs " + playerScore);
    else if(playerScore > computerScore)
        console.log("Player Wins " + playerScore  + " vs " + computerScore);
    else
        console.log("Draw " + computerScore + " vs " + playerScore);
}

game();