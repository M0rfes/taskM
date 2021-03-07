const { Router } = require('express')
const task = require('../controllers/tasks')
const router = Router()

router.get("/", task.getAll)

router.get("/:id", task.getById)

router.post('/', task.create)

router.put('/:id', task.update)

router.delete('/:id', task.remove)

module.exports = router