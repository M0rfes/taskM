const mongoose = require('mongoose')
const Admin = require('./models/admin')
const Employ = require('./models/employ')
const faker = require('faker')
module.exports = async () => {
    try {
        await mongoose.connect("mongodb+srv://faheem:faheem@cluster0.6ezyv.mongodb.net/tasks?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })
        if (! await Admin.findOne({ username: "admin" })) {
            const admin = new Admin({ username: "admin", password: "admin" })
            await admin.save()
        }

        if ((await Employ.find()).length < 10) {
            const employ = new Array(10).fill(true).map(() => new Employ({ username: faker.name.findName(), password: "admin" }))
            await Promise.all(employ.map(e => e.save()))
        }
    } catch (error) {
        console.error(error)
    }

}