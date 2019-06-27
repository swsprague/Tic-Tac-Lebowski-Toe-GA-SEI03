'use strict'

const sqZero = $('#0').text()
const sqThree = $('#3').text()
const sqSix = $('#6').text()

const sqOne = $('#1').text()
const sqFour = $('#4').text()
const sqSeven = $('#7').text()

const sqTwo = $('#2').text()
const sqFive = $('#5').text()
const sqEight = $('#8').text()

const winningState = function () {
  if ((sqZero === sqThree) && (sqThree === sqSix)) {
    return sqSix
  } else if ((sqOne === sqFour) && (sqFour === sqSeven)) {
    return sqSeven
  } else if ((sqTwo === sqFive) && (sqFive === sqEight)) {
    return sqEight
  }
}
