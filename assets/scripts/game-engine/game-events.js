'use strict'

// const getFormFields = require('../../../lib/get-form-fields')

const api = require('./game-api')
const ui = require('./game-ui')
const gameFunctions = require('./game-functions')
const store = require('../store')

const currentPlayer = gameFunctions.currentPlayer
console.log('currentPlayer is ', gameFunctions.currentPlayer)

const onNewGame = data => {
  console.log('data is: ', data)
  event.preventDefault()

  //  $('#current-player').text(`Your Move ${gameFunctions['currentPlayer']}`)

  api.newGame()
    .then(ui.newGameStart)
    .catch(ui.newGameFail)
}

const onUpdateGame = event => {
  console.log('Update currentPlayer is ', currentPlayer)
  console.log('store is currently: ', store)
  // const gameBoard = store.game.cells
  event.preventDefault()
  const move = {
    game: {
      cell: {
        index: event.target.id,
        value: gameFunctions.currentPlayer
      },
      over: 'false'
    }
  }
  //  move.game.cell['index'] = event.target.id
  //  move.game.cell['value'] = gameFunctions.currentPlayer
  if (gameFunctions.moveCheck(move) !== false) {
    ui.updateGameSuccess()
    $('#is-taken').text('Nice Move!')
  } else if (gameFunctions.moveCheck(move) === false) {
    $('#is-taken').text('This Square Is Taken!')
  }

  if (gameFunctions.checkWinner(move)) {
    $('#is-taken').text(`Player ${gameFunctions.currentPlayer} Wins!`)
  }

  //  $('#current-player').text(`Your Move ${move['value']}`)
  // move.game.over = gameFunctions.isOver()
  api.updateGame(move)
//    .then(ui.updateGameSuccess)
//    .catch(ui.updateGameFail)
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
  onUpdateGame

}
