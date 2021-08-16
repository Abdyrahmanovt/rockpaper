const buttons = document.querySelectorAll('button')
const score = document.querySelector('.score')
const message = document.querySelector('.message')
let winnerScore = [0, 0]

buttons.forEach(button => {
    button.addEventListener('click', playGame)
})

function playGame(e) {
    let computerSelection = Math.random()
    let playerSelection = e.target.innerText

    if (computerSelection < .34) {
        computerSelection = 'Rock'
    } else if (computerSelection < .67) {
        computerSelection = 'Paper'
    } else {
        computerSelection = 'Scissors'
    }

    let result = checkWinner(playerSelection, computerSelection)

    function checkWinner(player, computer) {
        if (player === computer) {
            return 'Draw'
        }
        if (player === 'Rock' && computer === 'Scissors' ||
            player === 'Paper' && computer === 'Rock' ||
            player === "Scissors" && computer === 'Paper') {
            return 'Player'
        } else {
            return 'Computer'
        }
    }

    if (result === 'Player') {
        result += '<span class="playerColor">:wins!</span>'
        winnerScore[0]++

    } else if (result === 'Computer') {
        result += '<span class="computerColor">:wins</span>'
        winnerScore[1]++
    }
    if (result === 'Draw') {
        result += '<span class="ravno">:eto ravno</span>'
    }
    score.innerHTML = `Player [${winnerScore[0]}] Computer [${winnerScore[1]}]`
    messanger(`<span class="playerColor">Player</span>:  <br>
 <span class="computerColor">Computer</span>: ${computerSelection} <br>
${result}`)
}

function messanger(selectionMessage) {
    message.innerHTML = selectionMessage
}




