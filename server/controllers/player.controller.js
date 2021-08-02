const bcrypt = require('bcrypt')
const playerRoutes = require('express').Router()
const Player = require('../models/player.model')

playerRoutes.get('/', async (request, response) => {
  const {skip,limit}=request.query

  const players = await Player.find({}).skip(Number(skip)).limit(Number(limit)).sort({elo:-1})
  const count=await Player.countDocuments()
  const totalPages= Math.ceil(count/Number(limit))

  response.json({players,totalPages})
})

playerRoutes.get('/:name', async (request, response) => {
  const {skip,limit}=request.query
  const {name} = request.params

  const players = await Player.find({username:{$regex :new RegExp(name, "i")}}).skip(Number(skip)).limit(Number(limit)).sort({elo:-1})
  const count=await Player.find({username:{$regex :new RegExp(name, "i")}}).countDocuments()
  const totalPages= Math.ceil(count/Number(limit))

  response.json({players,totalPages})
})


playerRoutes.post('/', async (request, response, next) => {

  const body = request.body
  const saltRounds = 11
  const passwordHash = await bcrypt.hash(body.password, saltRounds)

  const player = new Player({
    username: body.username,
    email: body.email,
    elo:500,
    passwordHash
  })

  try {
    const savedPlayer = await player.save()
    response.json(savedPlayer)
  } catch (error) {
    next(error)
  }
})


module.exports = playerRoutes