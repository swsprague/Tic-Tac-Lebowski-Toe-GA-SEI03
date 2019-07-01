'use strict'

const api = require('./game-api')
const ui = require('./game-ui')
const gameFunctions = require('./game-functions')
const store = require('../store')
const getFormFields = require('./../../../lib/get-form-fields')

const onNewGame = data => {
  console.log('data is: ', data)
  event.preventDefault()

  $('.sq').on('click', onUpdateGame)
  $('#hide-stats').hide()
  $('#show-game').hide()
  $('#change-pw').hide()
  $('#show-change-pw').show()

  //  $('#current-player').text(`Your Move ${gameFunctions['currentPlayer']}`)

  api.newGame()
    .then(ui.newGameStart)
    .then(gameFunctions.defaultState)
    .catch(ui.newGameFail)
}

const onUpdateGame = event => {
  const gameUser = store.user
  const currentGame = store.game
  console.log('store is currently: ', store)
  // const gameBoard = store.game.cells
  event.preventDefault()
  let move = {
    game: {
      cell: {
        index: '',
        value: ''
      },
      over: ''
    }
  }
  //  move.game.cell['index'] = event.target.id
  //  move.game.cell['value'] = gameFunctions.currentPlayer
  if (gameFunctions.moveCheck(move) !== false) {
    ui.updateGameSuccess()
    $('#is-taken').text('Nice Move!').show().fadeOut(3000)
  } else if (gameFunctions.moveCheck(move) === false) {
    $('#is-taken').text('This Square Is Taken!').show().fadeOut(3000)
  }

  const winner = gameFunctions.winningState(move)
  if (gameFunctions.checkWinner(move)) {
    $('#game-status').text(`Player ${winner} Wins!`).fadeIn(650)

    if (winner === 'X') {
      currentGame.winner = 'X Wins'
      gameUser.xWins += 1
    } else if (winner === 'O') {
      currentGame.winner = 'O Wins'
      gameUser.oWins += 1
    }
    gameFunctions.isOver()
  }

  if (gameFunctions.checkTie(move) === true) {
    $('#game-status').text('Itza tie womp womp :|').fadeIn(2000)
    currentGame.winner = 'Tie'
    gameUser.ties += 1
    gameFunctions.isOver()
  }

  //  $('#current-player').text(`Your Move ${move['value']}`)
  // move.game.over = gameFunctions.isOver()
  move = {
    game: {
      cell: {
        index: event.target.id,
        value: currentGame.cells[event.target.id]
      },
      over: currentGame.over,
      winner: currentGame.winner
    }
  }

  api.updateGame(move)
    .then(ui.updateGameSuccess)
    .catch(ui.updateGameFail)
}

const onCheckGames = data => {
  const gameUser = store.user
  //  const games = store.games
  event.preventDefault()
  $('#x-wins').text(`Current X Wins: ${gameUser.xWins}`)
  $('#o-wins').text(`Current O Wins: ${gameUser.oWins}`)
  $('#ties').text(`Current Ties: ${gameUser.ties}`)

  $('#hide-stats').show()
  $('#show-game').show()
  $('#games-played').show()
  $('#x-wins').show()
  $('#o-wins').show()
  $('#ties').show()
  $('.gameboard').hide()
  $('#game-status').hide()

  api.indexGames()
    .then(ui.indexGamesSuccess)
    .catch(ui.indexGamesFail)
}

const onShowGame = event => {
  event.preventDefault()
  const formData = getFormFields(event.target)

  console.log('This is the form data ', formData.game)

  api.showGame(formData.game.id)
    .then(ui.showGameSuccess)
    .catch(ui.showGameFail)
}

module.exports = {
  onNewGame,
  onUpdateGame,
  onCheckGames,
  onShowGame

}
