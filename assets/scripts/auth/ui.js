'use strict'

// const store = require('../store')

const successMessage = message => {
  $('#message').text(message)
  $('#message').addClass('success')
  $('#message').removeClass('failure')

  // clear forms
  $('form').trigger('reset')
}

const failureMessage = message => {
  $('#message').text(message)
  $('#message').addClass('failure')
  $('#message').removeClass('success')

  // clear forms
  $('form').trigger('reset')
}

const signUpSuccessful = () => {
  successMessage('You Signed Up Successfully!')
}

const signUpFailure = () => {
  failureMessage('Sign Up failure :(')
}

module.exports = {
  signUpSuccessful,
  signUpFailure
  // signInSuccessful,
  // signInFailure,
  // changePwSuccess,
  // changePwFailure,
  // signOutSuccess,
  // signOutFailure
}
