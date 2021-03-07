const adminService = require('../services/admin')

const login = async (req, res) => {
    try {
        const admin = await adminService.login(req.body.username, req.body.password)
        if (!admin)
            res.status(401).json({
                message: 'unauthorized',
                status: 401
            })
        return res.json(admin)
    } catch (error) {
        res.status(501).json({
            message: error.message,
            status: 501
        })
    }
}

module.exports = {
    login
}