'use strict'

const store = require('../store')

console.log('store rn: ', store)


let currentPlayer = 'X'
let turnCount = 0
// let clicks = 0

const changePlayer = function () {
//   if (clicks === 0) {
//     currentPlayer = 'X'
//     $('#current-player').text(`Your Move Player ${currentPlayer}`)
//     $(event.target).text('X')
//     clicks += 1
//   } else if (clicks % 2 !== 0) {
//     currentPlayer = 'O'
//     $('#current-player').text(`Your Move Player ${currentPlayer}`)
//     $(event.target).text('O')
//     clicks += 1
//   }
// }

  $('#current-player').text(`Your Move Player ${currentPlayer}`)
  if (currentPlayer === 'X') {
    $(event.target).text('X')
    turnCount += 1
    currentPlayer = 'O'
    $('#current-player').text(`Your Move Player ${currentPlayer}`)
  } else {
    $(event.target).text('O')
    turnCount += 1
    currentPlayer = 'X'
    $('#current-player').text(`Your Move Player ${currentPlayer}`)
  }

  console.log('turn count is ', turnCount)
}

const defaultState = function () {
  $('.sq').text('')
  $('#is-taken').text('')
  currentPlayer = 'X'
  turnCount = 0
}

const moveCheck = function () {
  const gameBoard = store.game
  console.log('square is: ', event.target.id)
  console.log('gameBoard is ', gameBoard)
  console.log('square is: ', event.target.id)
  if (gameBoard.cells[event.target.id] === '') {
    gameBoard.cells[event.target.id] = currentPlayer
    changePlayer()
  } else if (gameBoard.cells[event.target.id] !== '') {
    console.log(gameBoard.cells[event.target.id])
    return false
  }
}

const winningState = function (game) {
  const gameBoard = store.game

  console.log('gameBoard at winState is: ', gameBoard)

  const sqZero = gameBoard.cells[0]
  const sqThree = gameBoard.cells[3]
  const sqSix = gameBoard.cells[6]

  const sqOne = gameBoard.cells[1]
  const sqFour = gameBoard.cells[4]
  const sqSeven = gameBoard.cells[7]

  const sqTwo = gameBoard.cells[2]
  const sqFive = gameBoard.cells[5]
  const sqEight = gameBoard.cells[8]

  console.log('sqZero is ', sqZero)

  if ((sqZero === sqThree) && (sqThree === sqSix)) {
    return sqSix
  } else if ((sqOne === sqFour) && (sqFour === sqSeven)) {
    return sqSeven
  } else if ((sqTwo === sqFive) && (sqFive === sqEight)) {
    return sqEight
  } else if ((sqZero === sqOne) && (sqOne === sqTwo)) {
    return sqTwo
  } else if ((sqThree === sqFour) && (sqFour === sqFive)) {
    return sqFive
  } else if ((sqSix === sqSeven) && (sqSeven === sqEight)) {
    return sqEight
  } else if ((sqZero === sqFour) && (sqFour === sqEight)) {
    return sqEight
  } else if ((sqTwo === sqFour) && (sqFour === sqSix)) {
    return sqSix
  } else {
    return false
  }
}

const isOver = function () {
  const gameBoard = store.game
  $('#current-player').text('')
  $('.sq').off('click')
  gameBoard.over = true
}

const checkWinner = function (move) {
  const gameBoard = store.game
  console.log('gameBoard checkwin is: ', gameBoard)
  if (winningState(gameBoard)) {
    return true
  } else {
    return false
  }
}

const checkTie = function (move) {
  console.log('check tie turn count is', turnCount)

  if ((turnCount === 9) && (checkWinner(move) === false)) {
    return true
  } else {
    return false
  }
}

// const checkTie = function (move) {
//
// }

// if (winningState === true) {
//   $('#game-status').text(currentPlayer + ' is the winner!!')
//   $(event.target).text(currentPlayer)
// } else {
//   changePlayer()
// check for draw function
// }

//   if (/*check for draw function is true*/) {
//     $('#game-status').text('Itza Tie :|')
//   }
//
//   if (winningState() === true || draw == true) {
//     // endGame function
//   }
// }

// $('.sq').on('click', function (event) {
//   console.log('player selected ', event.target.id)
//   gameBoard.splice(event.target.id, 1, currentPlayer)
//   $(event.target).off('click')
//   console.log(gameBoard)
//   console.log('Your Move, ' + currentPlayer)

// const sqZero = $('#0').text()
// const sqThree = $('#3').text()
// const sqSix = $('#6').text()
//
// const sqOne = $('#1').text()
// const sqFour = $('#4').text()
// const sqSeven = $('#7').text()
//
// const sqTwo = $('#2').text()
// const sqFive = $('#5').text()
// const sqEight = $('#8').text()
//
// const winningState = function () {
//   if ((sqZero === sqThree) && (sqThree === sqSix)) {
//     return sqSix
//   } else if ((sqOne === sqFour) && (sqFour === sqSeven)) {
//     return sqSeven
//   } else if ((sqTwo === sqFive) && (sqFive === sqEight)) {
//     return sqEight
// }
// }

module.exports = {
  changePlayer,
  moveCheck,
  winningState,
  checkWinner,
  currentPlayer,
  defaultState,
  isOver,
  checkTie

}
