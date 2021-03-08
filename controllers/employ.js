const employService = require('../services/employ')

const login = async (req, res) => {
    try {
        const employ = await employService.login(req.body.username, req.body.password)
        if (!employ)
            res.status(401).json({
                message: 'unauthorized',
                status: 401
            })
        return res.json(employ)
    } catch (error) {
        res.status(401).json({
            message: error.message,
            status: 501
        })
    }
}
const getById = async (req, res) => {
    try {
        const employ = await employService.getById(req.params.id)
        if (!employ) {
            return res.status(404).json({
                message: `employ with id ${req.params.id} not found`,
                status: 404
            })
        }
        return res.json(employ)
    } catch (error) {
        res.status(501).json({
            message: error.message,
            status: 501
        })
    }
}
const getAll = async (req, res) => {
    try {
        const employees = await employService.getAll()
        return res.json(employees)
    } catch (error) {
        res.status(501).json({
            message: error.message,
            status: 501
        })
    }
}

const logout = (req, res) => {
    try {
        employService.logout(req.params.id)
        return res.json({})
    } catch (error) {
        res.status(501).json({
            message: error.message,
            status: 501
        })
    }
}

module.exports = {
    login,
    getById,
    getAll,
    logout
}