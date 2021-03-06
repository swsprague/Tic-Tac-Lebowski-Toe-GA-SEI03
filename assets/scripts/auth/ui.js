'use strict'

const store = require('../store')

const successMessage = message => {
  $('#message').text(message).show().fadeOut(4000)
  $('#message').addClass('success')
  $('#message').removeClass('failure')

  // clear forms
  $('form').trigger('reset')
}

const failureMessage = message => {
  $('#message').text(message).show()
  $('#message').addClass('failure')
  $('#message').removeClass('success')

  // clear forms
  $('form').trigger('reset')
}

const signUpSuccessful = () => {
  successMessage('You Signed Up Successfully - Please Sign In To Play!')
  $('#sign-up').hide()
}

const signUpFailure = () => {
  failureMessage('Sign Up failure :(')
}

const signInSuccessful = responseData => {
  successMessage('You Signed In Successfully!')

  // keep track of user so we have token for api
  // we use store so we can access the token in any file.
  store.user = responseData.user
  store.user.xWins = 0
  store.user.oWins = 0
  store.user.ties = 0
  $('#show-change-pw').show()
  $('#sign-out').show()
  $('#new-game').show()
  $('#show-stats').show()
  $('.giphy-embed').attr('hidden', false)
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#show-sign-up').hide()
}

const signInFailure = () => {
  failureMessage('Sign In Failed, Wrong Email Or Password :(')
}

const changePwSuccess = () => {
  successMessage('Changed Password Successfully!')
  $('#change-pw').hide()
  $('#show-change-pw').show()
}

const changePwFailure = () => {
  failureMessage('Password Change failure :(')
}

const signOutSuccess = () => {
  successMessage('Signed Out Successfully!')
  $('#change-pw').hide()
  $('#show-change-pw').hide()
  $('#sign-out').hide()
  $('#new-game').hide()
  $('#show-stats').hide()
  $('.gameboard').hide()
  $('#game-status').hide()
  $('#current-player').hide()
  $('#player-icon-x').hide()
  $('#player-icon-o').hide()
  $('.giphy-embed').attr('hidden', true)
  $('#games-played').hide()
  $('#x-wins').hide()
  $('#o-wins').hide()
  $('#ties').hide()
  $('#total-games').hide()
  $('#show-sign-in').show()
  $('#show-sign-up').show()
}

const signOutFailure = () => {
  failureMessage('Sign Out Failure')
}

module.exports = {
  signUpSuccessful,
  signUpFailure,
  signInSuccessful,
  signInFailure,
  changePwSuccess,
  changePwFailure,
  signOutSuccess,
  signOutFailure
}
