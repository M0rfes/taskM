const { Router } = require('express')
const employ = require('../controllers/employ')
const { route } = require('./task')
const router = Router()

router.post("/login", employ.login)
router.get("/", employ.getAll)
router.get("/:id", employ.getById)

module.exports = router