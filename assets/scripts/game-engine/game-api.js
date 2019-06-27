'use strict'

const config = require('../config')
const store = require('../store')

const newGame = (data) => {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  newGame
}
