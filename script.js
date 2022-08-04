
// Start button transition to game start
let title = document.querySelector (".title");
let subtitle = document.querySelector(".subtitle");
let btnContainer = document.querySelector ('.btncontainer');
let startBtn = document.querySelector(".startbutton");

//creates a gameboard
let gameboard = document.createElement('div');
document.body.insertBefore(gameboard, btnContainer);
gameboard.classList.add('gameboard');

startBtn.addEventListener('click', function (){
    startBtn.parentNode.removeChild(startBtn);
    subtitle.parentNode.removeChild(subtitle);
    title.innerText = 'CHOOSE YOUR WEAPON';

//creates a restart button
    let restartBtn = document.createElement('input')
    restartBtn.type = 'button';

//splits the gameboard between player and computer
    let playerboard = ["playergameboard", "computergameboard"];

    playerboard.forEach(playerboard=> {
        let divider = document.createElement('div');
        for (i = 0; i < 2; i++){
            divider.classList.add(playerboard);
        }
        gameboard.appendChild(divider);
    });

//adds divs to the playerside
    let playerGameboard = document.querySelector('.playergameboard');
    let playerText = document.createElement('div');
    playerGameboard.appendChild(playerText);
    playerText.innerText = 'PLAYER';

    playerText.classList.add('playertext');
    
    let playerSelectandLife = document.createElement('div');
    playerGameboard.appendChild(playerSelectandLife);
    playerSelectandLife.classList.add('playerselectandlife');
    
    let computerSelectandLife = document.createElement('div');
    computerSelectandLife.classList.add('computerselectandlife');

    let playerImgContainer = document.createElement('div');
    playerImgContainer.classList.add('playerimgcontainer');
    playerSelectandLife.appendChild(playerImgContainer);

    let playerImg = document.createElement('img');
    playerImg.classList.add('playerimg');
    playerImgContainer.appendChild(playerImg);

    let playerLifebar = document.createElement('div');
    playerSelectandLife.appendChild(playerLifebar);
    playerLifebar.classList.add('playerlifebar');

//adds divs to the computerside
    let computerGameboard = document.querySelector('.computergameboard');

    let computerText = document.createElement('div');
    computerGameboard.appendChild(computerText);
    computerText.classList.add('computertext');
    computerText.innerText = 'COMPUTER';

    computerGameboard.appendChild(computerSelectandLife);

    let computerImgContainer = document.createElement('div');
    computerImgContainer.classList.add ('computerimgcontainer');
    computerSelectandLife.appendChild(computerImgContainer)

    let computerImg = document.createElement('img');
    computerImg.classList.add('computerimg');
    computerImgContainer.appendChild(computerImg);


    let computerLifebar = document.createElement('div');
    computerSelectandLife.appendChild(computerLifebar);
    computerLifebar.classList.add('computerlifebar');


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
        btnContainer.appendChild(selectionBtn);
        console.dir
    });

    let playerScore = 5
    let computerScore = 5

        //adds a healthpool to the both sides
        let playerHealthpool = [ 1, 2, 3, 4, 5]
        for (var i = playerHealthpool.length; i > 0; i--){
            let playerLife = document.createElement('img');
            playerLife.src = "./images/heart-full.png";
            playerLifebar.appendChild(playerLife);
            playerLife.classList.add('playerHeart' + i);
            playerLife.setAttribute('id', 'hearts')
        }

        let computerHealthpool = [ 1, 2, 3, 4, 5]
        for (var i = computerHealthpool.length; i > 0; i--){
            let computerLife = document.createElement('img');
            computerLife.src = "./images/heart-full.png";
            computerLifebar.appendChild(computerLife);
            computerLife.classList.add('computerHeart' + i);
            computerLife.setAttribute('id', 'hearts')

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
        heartEmpty.src = './images/heart-empty.png';
         

        //computer selections
        if (computerSelection == 'Rock') {
            computerImg.src = "./images/rock.png";
        }
        else if (computerSelection == 'Paper') {
            computerImg.src = "./images/paper.png";
        }
        else 
            computerImg.src = "./images/scissors.png"

        
        // logic if player selects rock
        if (playerSelection == 'Rock') {
            playerImg.src = "./images/rock.png"
            if (computerSelection == 'Rock') {
                title.innerText = 'It was a draw! Try again!';
            }
            else if (computerSelection == 'Scissors') {
                title.innerText = playerSelection + ' beats ' + computerSelection + '!' + ' The computer took 1 damage!'
                computerScore--;
                if (computerScore == 4) {
                    const computerHealthOne = document.querySelector('.computerHeart1')
                    computerHealthOne.src = './images/heart-empty.png'
                }
                else if (computerScore == 3) {
                    const computerHealthTwo = document.querySelector('.computerHeart2')
                    computerHealthTwo.src = './images/heart-empty.png'
                }
                else if (computerScore == 2) {
                    const computerHealthThree = document.querySelector('.computerHeart3')
                    computerHealthThree.src = './images/heart-empty.png'
                }
                else if (computerScore == 1) {
                    const computerHealthFour = document.querySelector('.computerHeart4')
                    computerHealthFour.src = './images/heart-empty.png'
                }
                else if (computerScore == 0) {
                    const computerHealthFive = document.querySelector('.computerHeart5')
                    computerHealthFive.src = './images/heart-empty.png'
                    title.innerText = 'The computer has been defeated! You win!'
                }
            }
            else if (computerSelection == 'Paper') {
                title.innerText = computerSelection + ' beats ' + playerSelection + '!' + ' You took 1 damage!'
                playerScore--;
                if (playerScore == 4) {
                    const playerHealthOne = document.querySelector('.playerHeart1')
                    playerHealthOne.src = './images/heart-empty.png'
                }
                else if (playerScore == 3) {
                    const playerHealthTwo = document.querySelector('.playerHeart2')
                    playerHealthTwo.src = './images/heart-empty.png'
                }
                else if (playerScore == 2) {
                    const playerHealthThree = document.querySelector('.playerHeart3')
                    playerHealthThree.src = './images/heart-empty.png'
                }
                else if (playerScore == 1) {
                    const playerHealthFour = document.querySelector('.playerHeart4')
                    playerHealthFour.src = './images/heart-empty.png'
                }
                else {
                    const playerHealthFive = document.querySelector('.playerHeart5')
                    playerHealthFive.src = './images/heart-empty.png'
                    title.innerText = 'Your health has fallen to 0! You lose!'
                }
            }
        }

        //logic if player selects paper
        else if (playerSelection == 'Paper') {
            playerImg.src = "./images/paper.png"
            if (computerSelection == 'Paper') {
                title.innerText = 'Draw! Try again!';
            }
            else if (computerSelection == 'Rock') {
                title.innerText = playerSelection + ' beats ' + computerSelection + '!' + ' The computer took 1 damage!'
                computerScore--;
                if (computerScore == 4) {
                    const computerHealthOne = document.querySelector('.computerHeart1')
                    computerHealthOne.src = './images/heart-empty.png'
                }
                else if (computerScore == 3) {
                    const computerHealthTwo = document.querySelector('.computerHeart2')
                    computerHealthTwo.src = './images/heart-empty.png'
                }
                else if (computerScore == 2) {
                    const computerHealthThree = document.querySelector('.computerHeart3')
                    computerHealthThree.src = './images/heart-empty.png'
                }
                else if (computerScore == 1) {
                    const computerHealthFour = document.querySelector('.computerHeart4')
                    computerHealthFour.src = './images/heart-empty.png'
                }
                else if (computerScore == 0) {
                    const computerHealthFive = document.querySelector('.computerHeart5')
                    computerHealthFive.src = './images/heart-empty.png'
                    title.innerText = 'The computer has been defeated! You win!'
                }
            }
            else if (computerSelection == 'Scissors') {
                title.innerText = computerSelection + ' beats ' + playerSelection + '!' + ' You took 1 damage!'
                playerScore--;
                if (playerScore == 4) {
                    const playerHealthOne = document.querySelector('.playerHeart1')
                    playerHealthOne.src = './images/heart-empty.png'
                }
                else if (playerScore == 3) {
                    const playerHealthTwo = document.querySelector('.playerHeart2')
                    playerHealthTwo.src = './images/heart-empty.png'
                }
                else if (playerScore == 2) {
                    const playerHealthThree = document.querySelector('.playerHeart3')
                    playerHealthThree.src = './images/heart-empty.png'
                }
                else if (playerScore == 1) {
                    const playerHealthFour = document.querySelector('.playerHeart4')
                    playerHealthFour.src = './images/heart-empty.png'
                }
                else {
                    const playerHealthFive = document.querySelector('.playerHeart5')
                    playerHealthFive.src = './images/heart-empty.png'
                    title.innerText = 'Your health has fallen to 0! You lose!'
                }
            }
        }
        else if (playerSelection  == 'Scissors') {
            playerImg.src = "./images/scissors.png"
            if (computerSelection == 'Scissors') {
                title.innerText = 'Draw! Try again!';
            }
            else if (computerSelection == 'Paper'){
                title.innerText = playerSelection + ' beats ' + computerSelection + '!' + ' The computer took 1 damage!'
                computerScore--;
                if (computerScore == 4) {
                    const computerHealthOne = document.querySelector('.computerHeart1')
                    computerHealthOne.src = './images/heart-empty.png'
                }
                else if (computerScore == 3) {
                    const computerHealthTwo = document.querySelector('.computerHeart2')
                    computerHealthTwo.src = './images/heart-empty.png'
                }
                else if (computerScore == 2) {
                    const computerHealthThree = document.querySelector('.computerHeart3')
                    computerHealthThree.src = './images/heart-empty.png'
                }
                else if (computerScore == 1) {
                    const computerHealthFour = document.querySelector('.computerHeart4')
                    computerHealthFour.src = './images/heart-empty.png'
                }
                else if (computerScore == 0) {
                    const computerHealthFive = document.querySelector('.computerHeart5')
                    computerHealthFive.src = './images/heart-empty.png'
                    title.innerText = 'The computer has been defeated! You win!'
                }
            }
            else if (computerSelection == 'Rock') {
                title.innerText = computerSelection + ' beats ' + playerSelection + '!' + ' You took 1 damage!'
                playerScore--;
                if (playerScore == 4) {
                    const playerHealthOne = document.querySelector('.playerHeart1')
                    playerHealthOne.src = './images/heart-empty.png'
                }
                else if (playerScore == 3) {
                    const playerHealthTwo = document.querySelector('.playerHeart2')
                    playerHealthTwo.src = './images/heart-empty.png'
                }
                else if (playerScore == 2) {
                    const playerHealthThree = document.querySelector('.playerHeart3')
                    playerHealthThree.src = './images/heart-empty.png'
                }
                else if (playerScore == 1) {
                    const playerHealthFour = document.querySelector('.playerHeart4')
                    playerHealthFour.src = './images/heart-empty.png'
                }
                else {
                    const playerHealthFive = document.querySelector('.playerHeart5')
                    playerHealthFive.src = './images/heart-empty.png'
                    title.innerText = 'Your health has fallen to 0! You lose!'
                    
                }
            }
        }
        
        //restart button
        if (computerScore === 0 || playerScore === 0) {
            document.getElementById("selectionbtnrock").disabled = true;
            document.getElementById("selectionbtnpaper").disabled = true;
            document.getElementById("selectionbtnscissors").disabled = true;

            btnContainer.parentNode.insertBefore(restartBtn, btnContainer.nextSibling);
            restartBtn.classList.add('restart');
            restartBtn.setAttribute('value', 'Play again?');
            document.addEventListener("click", restartBtnListener);
            function restartBtnListener(event) {
                location.reload();
            }
        }        
    }
});