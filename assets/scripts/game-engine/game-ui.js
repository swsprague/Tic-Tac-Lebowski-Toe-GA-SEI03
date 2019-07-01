'use strict'

const store = require('../store')

// const moveStatus = message => {
//   $('#is-taken').text(message)
//
//   // clear forms
//   $('form').trigger('reset')
// }

const successMessage = message => {
  $('#game-status').text(message).fadeOut(3000).addClass('hide')
  $('#game-status').addClass('success')
  $('#game-status').removeClass('failure')

  // clear forms
  $('form').trigger('reset')
}

const failureMessage = message => {
  $('#game-status').text(message)
  $('#game-status').addClass('failure')
  $('#game-status').removeClass('success')

  // clear forms
  $('form').trigger('reset')
}

const newGameStart = responseData => {
  store.game = responseData.game
  console.log('store is ', store)
  successMessage('NEW GAME: START')
  $('#current-player').text(`Your Move Player X`)
}

const newGameFail = () => {
  failureMessage('UNABLE TO START NEW GAME')
}

const updateGameSuccess = responseData => {
  // store.game = responseData.game
  console.log('store is now: ', store)
  // moveStatus(`Nice Move`).addClass('show')
  console.log(store.game)
}

// const moveDisplay = () => {
//   moveStatus(`Your Turn Player !`)
// }

const updateGameFail = responseData => {
  failureMessage('No Can Do Compadre')
}

// const newMove = () => {
//
//   $('.div').text('x')
//   $('#message').addClass('success')
//   $('#message').removeClass('failure')
// }
// clear forms
// $('form').trigger('reset')
// }

module.exports = {
  newGameStart,
  newGameFail,
  updateGameSuccess,
  updateGameFail
// newMove
}
