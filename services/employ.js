const Employ = require('../models/employ')
const bcrypt = require('bcrypt')
const login = async (username, password) => {
    try {
        const employ = await Employ.findOne({ username }).populate("tasks")
        if (!employ) {
            return
        }
        if (! await bcrypt.compare(password, employ.password)) {
            return
        }
        employ.update({ lastLogin: new Date() })
        return employ
    } catch (error) {
        throw error
    }
}

const logout = async (id) => {
    try {
        Employ.findByIdAndUpdate(id, { lastLogout: new Date() })
    } catch (error) {
        throw error
    }
    return
}

const getAll = async () => {
    try {
        return Employ.find().populate("tasks")
    } catch (error) {
        throw error
    }
}

const getById = async (id) => {
    try {
        const employ = await Employ.findById(id).populate("tasks")
        return employ
    } catch (error) {
        throw error
    }
}
module.exports = {
    login,
    getById,
    getAll,
    logout,
}