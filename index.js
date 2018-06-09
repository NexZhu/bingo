const {text, send} = require('micro')
const cors = require('micro-cors')()

const cards = require('./cards.json')
const players = require('./players.json')

module.exports = cors(async (req, res) => {
  const name = await text(req)
  const i = players.indexOf(name)
  if (i === -1)
    return []
  return cards[i]
})
