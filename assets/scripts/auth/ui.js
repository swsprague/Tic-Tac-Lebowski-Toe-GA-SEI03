'use strict'

const store = require('../store')

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

const signInSuccessful = responseData => {
  console.log('responseData is ', responseData)
  successMessage('You Signed In Successfully!')

  // keep track of user so we have token for api
  // we use store so we can access the token in any file.
  store.user = responseData.user
}

const signInFailure = () => {
  failureMessage('Sign In Failed, Wrong Email Or Password :(')
}

const changePwSuccess = () => {
  successMessage('Changed Password Successfully!')
}

const changePwFailure = () => {
  failureMessage('Password Change failure :(')
}

const signOutSuccess = () => {
  successMessage('Signed Out Successfully!')
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
