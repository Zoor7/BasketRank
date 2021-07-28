const mongoose = require('mongoose')
const Schema = mongoose.Schema

const chatSchema = new Schema({
    conversation:[{
        message: { type: String },
        player: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Player'
        }
    }]
    },
    { timestamps: true }
)

chatSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const Chat = mongoose.model('Chat', chatSchema)
module.exports = Chat