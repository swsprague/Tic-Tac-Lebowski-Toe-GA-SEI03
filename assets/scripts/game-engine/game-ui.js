'use strict'

const store = require('../store')

const successMessage = message => {
  $('#game-status').text(message)
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
  console.log(store)
  store.game = responseData.game
  successMessage('NEW GAME: START')
}

const newGameFail = () => {
  failureMessage('UNABLE TO START NEW GAME')
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
  newGameFail
// newMove
}
