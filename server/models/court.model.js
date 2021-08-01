const mongoose = require('mongoose')
const Schema = mongoose.Schema
const uniqueValidator = require('mongoose-unique-validator')


const courtSchema = new Schema({
    name: { type: String, required: true, unique: true },
    hashtags: { type: String },
    city: { type: String, required: true },
    images: [
        { type: String }
    ],
    players: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Player'
        }
    ]

},
)

courtSchema.plugin(uniqueValidator)

courtSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const Court = mongoose.model('Court', courtSchema)
module.exports = Court