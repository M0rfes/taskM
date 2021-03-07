const Admin = require('../models/admin')
const bcrypt = require('bcrypt')
const login = async (username, password) => {
    try {
        const admin = await Admin.findOne({ username })
        if (!admin) {
            return
        }
        if (! await bcrypt.compare(password, admin.password)) {
            return
        }
        return admin
    } catch (error) {
        throw error
    }
}

module.exports = {
    login
}