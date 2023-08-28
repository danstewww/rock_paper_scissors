function getComputerChoice() {
    let values = ["Rock", "Paper", "Scissors"],
        valueToUse = values[Math.floor(Math.random() * values.length)];
        return valueToUse
}

function rps() {
    playerSelection = prompt("Enter Rock, Paper, or Scissors to play: ");
    computerSelection = getComputerChoice();
    newPlayerSelection = playerSelection.toLowerCase();
    newComputerSelection = computerSelection.toLowerCase();
    result = "";
    if (newPlayerSelection == "rock") {
        if (newComputerSelection == "paper") {
            alert("You lose! " + computerSelection + " beats " + playerSelection)
            return result = "loss"
        } else if (newComputerSelection == "scissors") {
            alert("You Win! " + playerSelection + " beats " + computerSelection)
            return result = "win"
        } else if (newComputerSelection == "rock") {
            alert("It's a draw! You both selected " + computerSelection)
            return result = "tie"
        }
    }

    if (newPlayerSelection == "scissors") {
        if (newComputerSelection == "rock") {
            alert("You lose! " + computerSelection + " beats " + playerSelection)
            return result = "loss"
        } else if (newComputerSelection == "paper") {
            alert("You Win! " + playerSelection + " beats " + computerSelection)
            return result = "win"
        } else if (newComputerSelection == "scissors") {
            alert("It's a draw! You both selected " + computerSelection)  
            return result = "tie"
        }
    }

    if (newPlayerSelection == "paper") {
        if (newComputerSelection == "scissors") {
            alert("You lose! " + computerSelection + " beats " + playerSelection)
            return result = "loss"
        } else if (newComputerSelection == "rock") {
            alert("You Win! " + playerSelection + " beats " + computerSelection)
            return result = "win"
        } else if (newComputerSelection == "paper") {
            alert("It's a draw! You both selected " + computerSelection)
            return result = "tie"
        }
    }
}


function game() {
    let playerScore = 0;
    let computerScore = 0;
    let draws = 0;


    rps();
    if (result == "win") {
        playerScore = playerScore + 1;
    } else if (result == "loss") {
        computerScore = computerScore + 1;
    } else if (result = "tie") {
        draws = draws + 1;
    }
    console.log(playerScore)
    console.log(computerScore)
    console.log(draws)

    rps();
    if (result == "win") {
        playerScore = playerScore + 1;
    } else if (result == "loss") {
        computerScore = computerScore + 1;
    } else if (result = "tie") {
        draws = draws + 1;
    }
    console.log(playerScore)
    console.log(computerScore)
    console.log(draws)

    rps();
    if (result == "win") {
        playerScore = playerScore + 1;
    } else if (result == "loss") {
        computerScore = computerScore + 1;
    } else if (result = "tie") {
        draws = draws + 1;
    }
    console.log(playerScore)
    console.log(computerScore)
    console.log(draws)

    rps();
    if (result == "win") {
        playerScore = playerScore + 1;
    } else if (result == "loss") {
        computerScore = computerScore + 1;
    } else if (result = "tie") {
        draws = draws + 1;
    }
    console.log(playerScore)
    console.log(computerScore)
    console.log(draws)

    rps();
    if (result == "win") {
        playerScore = playerScore + 1;
    } else if (result == "loss") {
        computerScore = computerScore + 1;
    } else if (result = "tie") {
        draws = draws + 1;
    }
    console.log(playerScore)
    console.log(computerScore)
    console.log(draws)

    if (playerScore > computerScore) {
        alert("Congratulations! You win!")
    } else if (computerScore > playerScore) {
        alert("Too bad! You Lose! ")
    } else {
        alert("It's a tie!")
    }
}


game()