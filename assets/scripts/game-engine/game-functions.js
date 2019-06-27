'use strict'

const store = require('../store')

let gameBoard = ['', '', '', '', '', '', '', '', '']

store.game.cells = gameBoard

let currentPlayer = 'X'

const changePlayer = function () {
  if (currentPlayer === 'X') {
    $(event.target).text('X')
    currentPlayer = 'O'
  } else {
    $(event.target).text('O')
    currentPlayer = 'X'
  }
}

const moveCheck = function (event) {
  if (gameBoard[event.target.id] !== '') {
    $('#game-status').text('This Square is Taken!')
  } else {
    gameBoard.splice(event.target, 1, currentPlayer)
  }

  if (winningState === true) {
    $('#game-status').text(currentPlayer + ' is the winner!!')
    $(event.target).text(currentPlayer)
  } else {
    changePlayer()
    // check for draw function
  }

  if (/*check for draww function is true*/) {
    $('#game-status').text('Itza Tie :|')
  }

  if (winningState() === true || draw == true) {
    // endGame function
  }
}

$('.sq').on('click', function (event) {
  console.log('player selected ', event.target.id)
  gameBoard.splice(event.target.id, 1, currentPlayer)
  $(event.target).off('click')
  console.log(gameBoard)
  console.log('Your Move, ' + currentPlayer)

})






const sqZero = $('#0').text()
const sqThree = $('#3').text()
const sqSix = $('#6').text()

const sqOne = $('#1').text()
const sqFour = $('#4').text()
const sqSeven = $('#7').text()

const sqTwo = $('#2').text()
const sqFive = $('#5').text()
const sqEight = $('#8').text()

const winningState = function () {
  if ((sqZero === sqThree) && (sqThree === sqSix)) {
    return sqSix
  } else if ((sqOne === sqFour) && (sqFour === sqSeven)) {
    return sqSeven
  } else if ((sqTwo === sqFive) && (sqFive === sqEight)) {
    return sqEight
  }
}

module.exports = {
  winningState,
  changePlayer
}