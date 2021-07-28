const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const loginRouter = require('express').Router()
const Player = require('../models/player.model')

loginRouter.post('/', async (request, response) => {
  const body = request.body

  const player = await Player.findOne({ username: body.username })
  const passwordCorrect = player === null
    ? false
    : await bcrypt.compare(body.password, player.passwordHash)

  if (!(player && passwordCorrect)) {
    return response.status(401).json({
      error: 'invalid playername or password'
    })
  }

  const playerForToken = {
    username: player.username,
    id: player._id,
  }

  const token = jwt.sign(playerForToken, process.env.SECRET)

  response
    .status(200)
    .send({ token, username: player.username, name: player.name })
})

module.exports = loginRouter