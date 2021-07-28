const bcrypt = require('bcrypt')
const playerRoutes = require('express').Router()
const Player = require('../models/player.model')

playerRoutes.get('/', (request, response) => {
  Player.find({}).then(player => {
    response.json(player)
  })
})

playerRoutes.post('/',async(request,response,next)=>{

  const body = request.body
  const saltRounds = 11
  const passwordHash = await bcrypt.hash(body.password, saltRounds)

  const player = new Player({
    username:body.username,
    email:body.email,
    passwordHash
  })

  try {
    const savedPlayer= await player.save()
    response.json(savedPlayer)
  } catch (error) {
    next(error)
  }
})


module.exports = playerRoutes