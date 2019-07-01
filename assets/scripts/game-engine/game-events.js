'use strict'

// const getFormFields = require('../../../lib/get-form-fields')

const api = require('./game-api')
const ui = require('./game-ui')
const gameFunctions = require('./game-functions')
const store = require('../store')

const onNewGame = data => {
  console.log('data is: ', data)
  event.preventDefault()

  $('.sq').on('click', onUpdateGame)

  //  $('#current-player').text(`Your Move ${gameFunctions['currentPlayer']}`)

  api.newGame()
    .then(ui.newGameStart)
    .then(gameFunctions.defaultState)
    .catch(ui.newGameFail)
}

const onUpdateGame = event => {
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

  const winner = gameFunctions.winningState(move)
  if (gameFunctions.checkWinner(move)) {
    $('#is-taken').text(`Player ${gameFunctions.winningState(move)} Wins!`)

    if (winner === 'X') {
      store.xWins += 1
    } else if (winner === 'O') {
      store.oWins += 1
    }
    gameFunctions.isOver()
  }

  if (gameFunctions.checkTie(move) === true) {
    $('#is-taken').text('Itza tie womp womp :|')
    store.ties += 1
  }

  //  $('#current-player').text(`Your Move ${move['value']}`)
  // move.game.over = gameFunctions.isOver()
  api.updateGame(move)
//    .then(ui.updateGameSuccess)
//    .catch(ui.updateGameFail)
}



module.exports = {
  onNewGame,
  onUpdateGame

}
