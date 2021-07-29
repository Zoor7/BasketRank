const express = require('express');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose')

const config =require('./utils/config')
const logger = require('./utils/logger')
const middleware = require('./utils/middleware')
const playerRoutes = require('./controllers/player.controller')
const loginRoutes = require('./controllers/login')

require('dotenv').config()


mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch((error) => {
    logger.error('error connecting to MongoDB:', error.message)
  })

app.use(cors())
app.use(express.static('build'))
app.use(express.json())
app.use(middleware.requestLogger)

app.use('/api/players', playerRoutes)
app.use('/api/login', loginRoutes)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

const PORT = config.PORT || 5000
app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});

module.exports = app
