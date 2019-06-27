'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./game-api')
const ui = require('./game-ui')

const onNewMove = event => {
  event.preventDefault()
  // no form data required for DELETE events
  api.newMove()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

module.exports = {
  onNewMove

}
