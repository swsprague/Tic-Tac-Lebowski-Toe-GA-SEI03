'use strict'

const store = require('../store')

console.log('store rn: ', store)

store.currentPlayer = 'X'
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

  $('#current-player').text(`Your Move Player ${store.currentPlayer}`)
  if (store.currentPlayer === 'X') {
    // $(event.target).text('X')
    $(event.target).prepend($('<img>', {id: 'tic-tac', src: 'https://i.imgur.com/2EoSvfi.png'}))
    // $(event.target).on('click', function () {
    //   ('#toe').trigger('play')
    // })
    turnCount += 1
    store.currentPlayer = 'O'
    $('#current-player').text(`Your Move Player ${store.currentPlayer}`)
  } else {
    // $(event.target).text('O')
    $(event.target).prepend($('<img>', {id: 'severed-toe', src: 'https://i.imgur.com/dMcQzTI.png'}))
    turnCount += 1
    store.currentPlayer = 'X'
    $('#current-player').text(`Your Move Player ${store.currentPlayer}`)
  }

  console.log('turn count is ', turnCount)
}

const defaultState = function () {
  $('.sq').text('')
  $('#is-taken').text('')
  store.currentPlayer = 'X'
  turnCount = 0
}

const moveCheck = function (move) {
  const gameBoard = store.game
  console.log('square is: ', event.target.id)
  console.log('gameBoard is ', gameBoard)
  console.log('square is: ', event.target.id)
  if (gameBoard.cells[event.target.id] === '') {
    gameBoard.cells[event.target.id] = store.currentPlayer
    // changePlayer()
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

  console.log('sqEight is ', sqEight)
  console.log('statement is ', (sqEight === sqSeven) && (sqSeven === sqSix))

  if ((sqZero === sqThree) && (sqThree === sqSix) && (sqZero !== '')) {
    return sqSix
  } else if ((sqOne === sqFour) && (sqFour === sqSeven) && (sqOne !== '')) {
    return sqSeven
  } else if ((sqTwo === sqFive) && (sqFive === sqEight) && (sqTwo !== '')) {
    return sqEight
  } else if ((sqZero === sqOne) && (sqOne === sqTwo) && (sqZero !== '')) {
    return sqTwo
  } else if ((sqThree === sqFour) && (sqFour === sqFive) && (sqThree !== '')) {
    return sqFive
  } else if ((sqSix === sqSeven) && (sqSeven === sqEight) && (sqSix !== '')) {
    return sqEight
  } else if ((sqZero === sqFour) && (sqFour === sqEight) && (sqZero !== '')) {
    return sqEight
  } else if ((sqTwo === sqFour) && (sqFour === sqSix) && (sqTwo !== '')) {
    return sqSix
  } else {
    return false
  }
}

const isOver = function () {
  const gameBoard = store.game
  $('#current-player').hide()
  $('#player-icon-x').hide()
  $('#player-icon-o').hide()
  $('.sq').off('click')
  gameBoard.over = true
}

const checkWinner = function (move) {
  const gameBoard = store.game
  console.log('gameBoard checkwin is: ', gameBoard)
  if (winningState(move)) {
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

module.exports = {
  changePlayer,
  moveCheck,
  winningState,
  checkWinner,
  defaultState,
  isOver,
  checkTie

}
