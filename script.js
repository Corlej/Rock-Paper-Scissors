
// Start button transition to game start
let title = document.querySelector ("#title");
let subtitle = document.querySelector("#subtitle");
let startContainer = document.getElementById ('container');
let startBtn = document.querySelector("#startbutton");


startBtn.addEventListener('click', function (){
    startBtn.parentNode.removeChild(startBtn);
    title.innerText = 'CHOOSE YOUR WEAPON';
    subtitle.innerText = '';

//creates a gameboard
    let gameboard = document.createElement('div');
    document.body.insertBefore(gameboard, container);
    gameboard.classList.add('gameboard');

//splits the gameboard between player and computer
    let playerboard = ["playerside", "computerside"];

    playerboard.forEach(playerboard=> {
        let divider = document.createElement('div');
        for (i = 0; i < 2; i++){
            divider.classList.add(playerboard);
        }
        gameboard.appendChild(divider);
    });

//adds divs to the playerside
    let playerSide = document.querySelector('.playerside');

    let playerText = document.createElement('div');
    playerSide.appendChild(playerText);
    playerText.classList.add('playertext');
    playerText.innerText = 'PLAYER';

    let playerImg = document.createElement('div');
    playerSide.appendChild(playerImg);
    playerImg.classList.add('playerimg');

    let playerLifebar = document.createElement('div');
    playerSide.appendChild(playerLifebar);
    playerLifebar.classList.add('playerLifebar');

//adds divs to the computerside
    let computerSide = document.querySelector('.computerside');

    let computerText = document.createElement('div');
    computerSide.appendChild(computerText);
    computerText.classList.add('computertext');
    computerText.innerText = 'COMPUTER';

    let computerImg = document.createElement('div');
    computerSide.appendChild(computerImg);
    computerImg.classList.add('computerimg');

    let computerLifebar = document.createElement('div');
    computerSide.appendChild(computerLifebar);
    computerLifebar.classList.add('computerLifebar');


//creates player selection buttons
    const playerSelection = ["Rock", "Paper", "Scissors"];

    playerSelection.forEach(playerSelection=> {
        const selectionBtn = document.createElement('input');
        selectionBtn.type = 'button';
        for (i = 0; i < 3; i++) {
            selectionBtn.classList.add(playerSelection.toLowerCase() + 'btn');
            selectionBtn.setAttribute('id', 'selectionbtn' + playerSelection.toLocaleLowerCase())
        }
        selectionBtn.setAttribute('value', playerSelection);
        selectionBtn.innerHTML = playerSelection;
        container.appendChild(selectionBtn);
        console.dir
    });

    let playerScore = 5
    let computerScore = 5

        //adds a healthpool to the both sides
        let playerHealthpool = [ 1, 2, 3, 4, 5]
        for (var i = playerHealthpool.length; i > 0; i--){
            let playerLife = document.createElement('img');
            playerLife.src = "./heart-full.png";
            playerLifebar.appendChild(playerLife);
            playerLife.classList.add('playerHeart' + i);
        }

        let computerHealthpool = [ 1, 2, 3, 4, 5]
        for (var i = computerHealthpool.length; i > 0; i--){
            let computerLife = document.createElement('img');
            computerLife.src = "./heart-full.png";
            computerLifebar.appendChild(computerLife);
            computerLife.classList.add('computerHeart' + i);
        }
    // button event listener for playRound

    document.addEventListener("click", gameSelectionListener);

    function gameSelectionListener(event) {
        let element = event.target
        console.log(event.target);
        let rock = "Rock";
        let paper = "Paper";
        let scissors = "Scissors";
        if (element.classList.contains("rockbtn")){
            playRound(rock);
            console.log("submitted rock")
        }
        else if (element.classList.contains("paperbtn")){
            playRound(paper);
            console.log("submitted paper")
        }
        else if (element.classList.contains("scissorsbtn")){
            playRound(scissors);
            console.log("submitted scissors")
        }
    }

    //function to randomly choose computer selection
    function computerPlay() {
        let choices = ['Rock', 'Paper', 'Scissors']
        return choices [Math.floor(Math.random() * 3)]
    }

    //main game
    function playRound(playerSelection) {
        console.log(playerSelection);
        const computerSelection = computerPlay();
        const rockSelected = document.querySelector('.rockbtn');
        const paperSelected = document.querySelector('.paperbtn');
        const scissorsSelected = document.querySelector('.scissorsbtn');
        const heartEmpty = document.createElement('img');
        heartEmpty.src = './heart-empty.png';
         

        //computer selections
        if (computerSelection == 'Rock') {
            computerImg.innerHTML = 'Rock';
        }
        else if (computerSelection == 'Paper') {
            computerImg.innerHTML = 'Paper';
        }
        else computerImg.innerHTML = 'Scissors';
        
        // logic if player selects rock
        if (playerSelection == 'Rock') {
            playerImg.innerHTML = 'Rock'
            if (computerSelection == 'Rock') {
                title.innerText = 'It was a draw!';
            }
            else if (computerSelection == 'Scissors') {
                title.innerText = playerSelection + ' beats ' + computerSelection + '!'
                subtitle.innerText = 'The computer took 1 damage!'
                computerScore--;
                if (computerScore == 4) {
                    const computerHealthOne = document.querySelector('.computerHeart1')
                    computerHealthOne.src = './heart-empty.png'
                }
                else if (computerScore == 3) {
                    const computerHealthTwo = document.querySelector('.computerHeart2')
                    computerHealthTwo.src = './heart-empty.png'
                }
                else if (computerScore == 2) {
                    const computerHealthThree = document.querySelector('.computerHeart3')
                    computerHealthThree.src = './heart-empty.png'
                }
                else if (computerScore == 1) {
                    const computerHealthFour = document.querySelector('.computerHeart4')
                    computerHealthFour.src = './heart-empty.png'
                }
                else if (computerScore == 0) {
                    const computerHealthFive = document.querySelector('.computerHeart5')
                    computerHealthFive.src = './heart-empty.png'
                    title.innerText = 'The computer has been defeated! You win!'
                }
            }
            else if (computerSelection == 'Paper') {
                title.innerText = computerSelection + ' beats ' + playerSelection + '!'
                subtitle.innerText = 'You took 1 damage!'
                playerScore--;
                if (playerScore == 4) {
                    const playerHealthOne = document.querySelector('.playerHeart1')
                    playerHealthOne.src = './heart-empty.png'
                }
                else if (playerScore == 3) {
                    const playerHealthTwo = document.querySelector('.playerHeart2')
                    playerHealthTwo.src = './heart-empty.png'
                }
                else if (playerScore == 2) {
                    const playerHealthThree = document.querySelector('.playerHeart3')
                    playerHealthThree.src = './heart-empty.png'
                }
                else if (playerScore == 1) {
                    const playerHealthFour = document.querySelector('.playerHeart4')
                    playerHealthFour.src = './heart-empty.png'
                }
                else {
                    const playerHealthFive = document.querySelector('.playerHeart5')
                    playerHealthFive.src = './heart-empty.png'
                    title.innerText = 'Your health has fallen to 0. You lose!'
                }
            }
        }

        //logic if player selects paper
        else if (playerSelection == 'Paper') {
            playerImg.innerHTML = 'Paper'
            if (computerSelection == 'Paper') {
                title.innerText = 'Draw!';
            }
            else if (computerSelection == 'Rock') {
                title.innerText = playerSelection + ' beats ' + computerSelection + '!'
                subtitle.innerText = 'The computer took 1 damage!'
                computerScore--;
                if (computerScore == 4) {
                    const computerHealthOne = document.querySelector('.computerHeart1')
                    computerHealthOne.src = './heart-empty.png'
                }
                else if (computerScore == 3) {
                    const computerHealthTwo = document.querySelector('.computerHeart2')
                    computerHealthTwo.src = './heart-empty.png'
                }
                else if (computerScore == 2) {
                    const computerHealthThree = document.querySelector('.computerHeart3')
                    computerHealthThree.src = './heart-empty.png'
                }
                else if (computerScore == 1) {
                    const computerHealthFour = document.querySelector('.computerHeart4')
                    computerHealthFour.src = './heart-empty.png'
                }
                else if (computerScore == 0) {
                    const computerHealthFive = document.querySelector('.computerHeart5')
                    computerHealthFive.src = './heart-empty.png'
                    title.innerText = 'The computer has been defeated! You win!'
                }
            }
            else if (computerSelection == 'Scissors') {
                title.innerText = computerSelection + ' beats ' + playerSelection + '!'
                subtitle.innerText = 'You took 1 damage!'
                playerScore--;
                if (playerScore == 4) {
                    const playerHealthOne = document.querySelector('.playerHeart1')
                    playerHealthOne.src = './heart-empty.png'
                }
                else if (playerScore == 3) {
                    const playerHealthTwo = document.querySelector('.playerHeart2')
                    playerHealthTwo.src = './heart-empty.png'
                }
                else if (playerScore == 2) {
                    const playerHealthThree = document.querySelector('.playerHeart3')
                    playerHealthThree.src = './heart-empty.png'
                }
                else if (playerScore == 1) {
                    const playerHealthFour = document.querySelector('.playerHeart4')
                    playerHealthFour.src = './heart-empty.png'
                }
                else {
                    const playerHealthFive = document.querySelector('.playerHeart5')
                    playerHealthFive.src = './heart-empty.png'
                    title.innerText = 'Your health has fallen to 0. You lose!'
                }
            }
        }
        else if (playerSelection  == 'Scissors') {
            playerImg.innerHTML = 'Scissors'
            if (computerSelection == 'Scissors') {
                title.innerText = 'Draw!';
            }
            else if (computerSelection == 'Rock'){
                title.innerText = playerSelection + ' beats ' + computerSelection + '!'
                subtitle.innerText = 'The computer took 1 damage!'
                computerScore--;
                if (computerScore == 4) {
                    const computerHealthOne = document.querySelector('.computerHeart1')
                    computerHealthOne.src = './heart-empty.png'
                }
                else if (computerScore == 3) {
                    const computerHealthTwo = document.querySelector('.computerHeart2')
                    computerHealthTwo.src = './heart-empty.png'
                }
                else if (computerScore == 2) {
                    const computerHealthThree = document.querySelector('.computerHeart3')
                    computerHealthThree.src = './heart-empty.png'
                }
                else if (computerScore == 1) {
                    const computerHealthFour = document.querySelector('.computerHeart4')
                    computerHealthFour.src = './heart-empty.png'
                }
                else if (computerScore == 0) {
                    const computerHealthFive = document.querySelector('.computerHeart5')
                    computerHealthFive.src = './heart-empty.png'
                    title.innerText = 'The computer has been defeated! You win!'
                }
            }
            else if (computerSelection == 'Paper') {
                title.innerText = computerSelection + ' beats ' + playerSelection + '!'
                subtitle.innerText = 'You took 1 damage!'
                playerScore--;
                if (playerScore == 4) {
                    const playerHealthOne = document.querySelector('.playerHeart1')
                    playerHealthOne.src = './heart-empty.png'
                }
                else if (playerScore == 3) {
                    const playerHealthTwo = document.querySelector('.playerHeart2')
                    playerHealthTwo.src = './heart-empty.png'
                }
                else if (playerScore == 2) {
                    const playerHealthThree = document.querySelector('.playerHeart3')
                    playerHealthThree.src = './heart-empty.png'
                }
                else if (playerScore == 1) {
                    const playerHealthFour = document.querySelector('.playerHeart4')
                    playerHealthFour.src = './heart-empty.png'
                }
                else {
                    const playerHealthFive = document.querySelector('.playerHeart5')
                    playerHealthFive.src = './heart-empty.png'
                    title.innerText = 'Your health has fallen to 0. You lose!'
                }
            }
        }
        
        //disable buttons
        if (computerScore === 0 || playerScore === 0) {
            document.getElementById("selectionbtnrock").disabled = true;
            document.getElementById("selectionbtnpaper").disabled = true;
            document.getElementById("selectionbtnscissors").disabled = true;
        }
    }
//closing brackets to first event listener 
});