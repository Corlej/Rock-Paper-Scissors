let playerScore = 0
let computerScore = 0
let roundWinner = ''

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        roundWinner = 'tie'
    }
    if (
        (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper')
    ) {
        playerScore++
        roundWinner = 'player'
    }
    if (
        (computerSelection === 'Rock' && playerSelection === 'Scissors') ||
        (computerSelection === 'Paper' && playerSelection === 'Rock') ||
        (computerSelection === 'Scissors' && playerSelection === 'Paper')
    ) {
        computerScore++
        roundWinner = 'computer'
    }
    updateScoreMessage(roundWinner, playerSelection, computerSelection)
}


//html references start here
        
    //document.getElementbyId go here

    //button inputs so use an addEventListener 

//html references end here


//consider writing the code as if player wins, else tie, else lose function for playRound

