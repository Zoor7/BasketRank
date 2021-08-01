const mongoose = require('mongoose')
const Schema = mongoose.Schema

const teamSchema = new Schema({
    name: { type: String, required: true, maxlength: 15 },
    players: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Player'
    }],
    court: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Court'
    },
    rank: { type: Number },
    games: { type: Number },
    wins: { type: Number },
    defeats: { type: Number },
    elo: { type: Number },
    avatar: { type: String }
},
    { timestamps: true }
)

teamSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
        // the passwordHash should not be revealed
        delete returnedObject.passwordHash
    }
})

const Team = mongoose.model('Team', teamSchema)
module.exports = Team