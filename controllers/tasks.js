const taskService = require('../services/task')

const getAll = async (req, res) => {
    try {
        const tasks = await taskService.getAll();
        return res.json(tasks)
    } catch (error) {
        res.status(501).json({
            message: error.message,
            status: 501
        })
    }
}
const getById = async (req, res) => {
    try {
        const task = await taskService.getById(req.params.id);
        if (!task) {
            return res.status(404).json({
                message: `task with id + ${req.params.id}  not found`,
                status: 404,
            })
        }
        return res.json(task)
    } catch (error) {
        res.status(501).json({
            message: error.message,
            status: 501
        })
    }
}
const create = async (req, res) => {
    try {
        const task = await taskService.add(req.body)
        return res.json(task)
    } catch (error) {
        res.status(501).json({
            message: error.message,
            status: 501
        })
    }
}
const update = async (req, res) => {
    try {
        const task = await taskService.getById(req.params.id)
        if (!task) {
            return res.status(404).json({
                message: `task with id + ${req.params.id}  not found`,
                status: 404,
            })
        }
        const newTask = { ...task.toObject(), ...req.body }
        await taskService.update(newTask)
        return res.json(newTask)
    } catch (error) {
        res.status(501).json({
            message: error.message,
            status: 501
        })
    }
}
const remove = async (req, res) => {
    try {
        const task = await taskService.getById(req.params.id);
        if (!task) {
            return res.status(404).json({
                message: `task with id + ${req.params.id}  not found`,
                status: 404,
            })
        }
        await taskService.remove(task.id)
        return res.json(task)
    } catch (error) {
        res.status(501).json({
            message: error.message,
            status: 501
        })
    }
}
module.exports = {
    getAll,
    getById,
    create,
    remove,
    update,
}