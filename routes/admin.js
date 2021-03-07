const { Router } = require('express')
const admin = require('../controllers/admin')
const router = Router()

router.post("/login", admin.login)



module.exports = router