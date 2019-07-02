'use strict'

const store = require('../store')

// const moveStatus = message => {
//   $('#is-taken').text(message)
//
//   // clear forms
//   $('form').trigger('reset')
// }

const successMessage = message => {
  $('#game-status').text(message).show().fadeOut(3000)
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
  $('.gameboard').show()
  $('#current-player').text(`Your Move Player X`).show()
  $('#player-icon-x').text('X = Tic-Tacs').show()
  $('#player-icon-o').text('O = Toe').show()
  $('#show-change-pw').show()
  $('#hide-stats').hide()
  $('#show-game').hide()
  $('#change-pw').hide()
  $('#games-played').hide()
  $('#total-games').hide()
  $('#x-wins').hide()
  $('#o-wins').hide()
  $('#ties').hide()
}

const newGameFail = () => {
  failureMessage('UNABLE TO START NEW GAME')
}

const updateGameSuccess = responseData => {
  // store.game = responseData.game
  console.log('store is now: ', store)
  console.log('responseData is ', responseData)
  console.log(store.game)
}

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

const indexGamesSuccess = responseData => {
  store.games = responseData.games
  console.log('index games success ', responseData)
  $('#games-played').html('')
  $('#total-games').text(`Total Games Played: ${store.games.length}`).show()

  store.games.forEach(function (game) {
    const gamesHtml = (`
      <h4>Game ID: ${game.id}</h4>
      <p>Completed: ${game.over}</p>

      <br>
    `)
    // <p>Result: ${game.winner}</p>
    $('#games-played').append(gamesHtml)
  })

  console.log('store games array length: ', store.games.length)
}

const indexGamesFail = function (error) {
  console.log('Index Games Failed ', error)
  failureMessage('Cannot Load Games')
}

// const hideGames = function {
//
// }

const showGameSuccess = responseData => {
  console.log('show game success ', responseData)
  $('#games-played').html(`
      <p>Game ID: ${responseData.game.id}<p>
      <p>Completed: ${responseData.game.over}</p>

      <br>
    `)

  $('form').trigger('reset')
}

const showGameFail = function (response) {
  console.log('Show Game Failed ', response)
  $('#games-played').html('')
  failureMessage('Game Not Found :(')
  $('form').trigger('reset')
}

module.exports = {
  newGameStart,
  newGameFail,
  updateGameSuccess,
  updateGameFail,
  indexGamesSuccess,
  indexGamesFail,
  showGameSuccess,
  showGameFail
}
