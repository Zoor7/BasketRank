const courtRoutes = require('express').Router()
const { request } = require('..')
const Court = require('../models/court.model')

courtRoutes.get('/',(request,response,next)=>{

    Court.find({}).then(court => {
        response.json(court)
      })

})
courtRoutes.post('/',async (request, response, next) => {
    const body = request.body
    const court = new Court({
        name: body.name,
        city: body.city
    })

    try {
        const savedCourt = await court.save()
        response.json(savedCourt)
    } catch (error) {
        next(error)
    }
})


module.exports = courtRoutes