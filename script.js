let playerScore = 0
let computerScore = 0
const buttons = document.querySelectorAll('input')

function computerPlay () {
    let choices = ['rock', 'paper', 'scissors']
    return choices [Math.floor(Math.random() * 3)]
}

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

function playRound(playerSelection) {
    let computerSelection = computerPlay()
    let result = ""

    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'scissors' && computerSelection == 'paper')) {

        playerScore += 1
        result = ('You win the round! ' +  capitalizeFirstLetter(playerSelection) + ' beats ' + computerSelection + '.'
        + "<br><br>Player Score: " + playerScore + "<br>Computer Score: " + computerScore)
    
        if (playerScore == 5) {
            result += '<br><br>You win the game! Reload the page to play again'
            disableButtons()
        }
}
    else if (playerSelection == computerSelection) {
        result = ('It\'s a tie. You both chose ' + playerSelection + '.'
            + '<br><br>Player Score: ' + playerScore + '<br>Computer Score: ' + computerScore)
    }
    else {
        computerScore += 1
        result = ('You lose this round! ' +  capitalizeFirstLetter(computerSelection) + ' beats ' + playerSelection + '.'
            + '<br><br>Player Score: ' + playerScore + '<br>Computer Score: ' + computerScore)
        
        if (computerScore == 5) {
            result += '<br><br> You have lost the game! Reload the page to play again!'
            disableButtons()
        }
    }

    document.getElementById('result').innerHTML = result
    return
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
  }
buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value)
    })
})
