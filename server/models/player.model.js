const mongoose = require('mongoose')
const Schema = mongoose.Schema
const uniqueValidator = require('mongoose-unique-validator')

const playerSchema = new Schema({
    username: { type: String, required: true, maxlength:15,unique:true },
    email: { type: String, required: true },
    court: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Court'
    },
    age: { type: Number },
    avatar:{type: String},
    heigth: { type: Number },
    elo:{type:Number},
    team: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team',
    },
    rank:{type:Number},
    games:{type:Number},
    wins:{type:Number},
    defeats:{type:Number},
    passwordHash: { type: String,required:true },
},
    { timestamps: true }
)

playerSchema.plugin(uniqueValidator)

playerSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
        // the passwordHash should not be revealed
        delete returnedObject.passwordHash
    }
})

const Player = mongoose.model('Player', playerSchema)
module.exports = Player