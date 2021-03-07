const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const adminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String, required: true
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

adminSchema.pre("save", async function (next) {
    try {
        const salt = await bcrypt.genSalt(10)
        this.password = await bcrypt.hash(this.password, salt)
        return next()
    } catch (error) {
        return next(error)
    }
})
const Admin = mongoose.model('Admin', adminSchema)


module.exports = Admin