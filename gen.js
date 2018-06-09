const fs = require('fs')

// http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
  var currentIndex = array.length
      , temporaryValue
      , randomIndex


  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    // And swap it with the current element.
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}

function range(n) {
  return [...new Array(n).keys()]
}

const a = [...new Array(15).keys()]

range(25).forEach(() => {
  const p = range(5).map(i => shuffle(a.slice(0)).map(n => 15 * i + n + 1))
  range(3).forEach(i => fs.appendFileSync('result.txt',
      JSON.stringify([].concat(...range(5).map(j => p[j].slice(5 * i, 5 * i + 5)))) + '\n'
  ))
})
