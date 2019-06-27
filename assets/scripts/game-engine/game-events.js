'use strict'

// const getFormFields = require('../../../lib/get-form-fields')

const api = require('./game-api')
const ui = require('./game-ui')
const gameFunctions = require('./game-functions')

const gameBoard = ['', '', '', '', '', '', '', '', '']

// store.game.cells = gameBoard

const moveCheck = function (event) {
  if (gameBoard[event.target.id] === '') {
    gameBoard.splice(event.target, 1, gameFunctions.currentPlayer)
    $('#game-status').text('Nice Move')
    gameFunctions.changePlayer()
  }
  if (gameBoard[event.target.id] !== '') {
    $('#game-status').text('This Square is Taken!')
  }
}

const onNewGame = data => {
  console.log('data is: ', data)
  event.preventDefault()

  api.newGame()
    .then(ui.newGameStart)
    .catch(ui.newGameFail)
}

const onUpdateGame = event => {
  event.preventDefault()
  const move = store.game
}

// const nextMove = event => {
//   event.preventDefault()
//
//   if (gameFunctions.moveCheck) {
//
//   }
//   let turn = 0
//
//   $('#0, #1, #2, #3, #4, #5, #6, #7, #8').click(() => {
//     const cell = $(this)
//     if (!cell.hasClass('x') && !cell.hasClass('o')) {
//       if (turn === 0) {
//         turn = 1
//         cell.addClass('o')
//       } else {
//         turn = 0
//         cell.addClass('x')
//       }
//     }
//   })
// }

module.exports = {
  onNewGame,
  moveCheck

}
