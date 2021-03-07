const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    tasks: {
        type: [String],
        require: true
    },
    employ: {
        type: mongoose.Types.ObjectId,
        ref: "employ",
        required: true
    }
}, {
    timestamps: true,
    toObject: {
        transform(_doc, ret) {
            ret.id = ret._id
            delete ret._id
            delete ret.__v
        }
    },
    toJSON: {
        transform(_doc, ret) {
            ret.id = ret._id
            delete ret._id
            delete ret.__v
        }
    }
})

const Task = mongoose.model('Task', taskSchema)

module.exports = Task