const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const employSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String, required: true
    },
    lastLogin: Date,
    lastLogout: Date,
}, {
    timestamps: true,
    toObject: {
        transform(_doc, ret) {
            ret.id = ret._id
            delete ret._id
            delete ret.__v

        },
        virtuals: true
    },
    toJSON: {
        transform(_doc, ret) {
            ret.id = ret._id
            delete ret._id
            delete ret.__v

        },
        virtuals: true
    }
})

employSchema.pre("save", async function (next) {
    try {
        const salt = await bcrypt.genSalt(10)
        this.password = await bcrypt.hash(this.password, salt)
        return next()
    } catch (error) {
        return next(error)
    }
})

employSchema.virtual("tasks", {
    ref: 'Task',
    localField: '_id',
    foreignField: 'employ',
    justOne: false
})

const employ = mongoose.model('employ', employSchema)

module.exports = employ