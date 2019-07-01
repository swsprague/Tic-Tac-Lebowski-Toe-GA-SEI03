'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events')
const gameEvents = require('./game-engine/game-events')

$(() => {
  // your JS code goes here
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#quick').on('click', authEvents.onQuickSignIn)
  $('#change-pw').on('submit', authEvents.onChangePw)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#new-game').on('click', gameEvents.onNewGame)
  $('#new-game').on('click', gameEvents.currentPlayer)
  $('#show-stats').on('click', gameEvents.onCheckGames)
  $('#show-game').on('submit', gameEvents.onShowGame)
})
