let playerScore = 0, 
    computerScore = 0;

let opt = document.querySelectorAll('.option');
opt.forEach(op => op.addEventListener('click', result));

function result(e) {
    let playerSelection = this.id;
    // console.log(playerSelection);
    let computerSelection = computerPlay();
    let res = playRound(playerSelection, computerSelection);
    let textBox = document.querySelector('.result-text')

    switch(res) {
        case 0: 
        textBox.innerText = "Draw!";
        break;
        case 1: 
            textBox.innerText = "You Lose! " + computerSelection + " beats " + playerSelection;
            computerScore++;
        break;
        case 2: 
            textBox.innerText = "You Win! " + playerSelection + " beats " + computerSelection;
            playerScore++;
        break;
        case 3: 
            textBox.innerText = "Invalid Choice!";
            i--;
        break;
    }

    let pscore = document.querySelector('.player-score');
    let cscore = document.querySelector('.computer-score');
    pscore.innerText = playerScore;
    cscore.innerText = computerScore;
}

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

// function game() {
//     let playerScore = 0, computerScore = 0;
//     for(let i = 0; i < 5; i++){
//         const computerSelection = computerPlay();
//         const playerSelection = prompt("Choice rock, paper, or scissors", "rock");
//         const res = playRound(playerSelection, computerSelection);
        
//         switch(res) {
//             case 0: 
//                 console.log("Draw!");
//             break;
//             case 1: 
//                 console.log("You Lose! " + computerSelection + " beats " + playerSelection);
//                 computerScore++;
//             break;
//             case 2: 
//                 console.log("You Win! " + playerSelection + " beats " + computerSelection);
//                 playerScore++;
//             break;
//             case 3: 
//                 console.log("Invalid Choice!");
//                 i--;
//             break;
//         }
//     }

//     if(computerScore > playerScore)
//         console.log("Computer Wins " + computerScore + " vs " + playerScore);
//     else if(playerScore > computerScore)
//         console.log("Player Wins " + playerScore  + " vs " + computerScore);
//     else
//         console.log("Draw " + computerScore + " vs " + playerScore);
// }

// game();