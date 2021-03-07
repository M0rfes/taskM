const Task = require("../models/tasks")

const getAll = async () => {
    try {
        const tasks = await Task.find().populate("employ")
        return tasks
    } catch (error) {
        throw error
    }
}

const getOne = async (filter) => {
    try {
        const task = await (await Task.findOne(filter)).populate("employ")
        return task
    } catch (error) {
        throw error
    }
}

const getById = async (id) => {
    try {
        const task = await Task.findById(id).populate("employ")
        return task
    } catch (error) {
        throw error
    }
}

const add = async (task) => {
    try {
        const newTask = new Task(task)
        await newTask.save()
        return newTask
    } catch (error) {
        throw error
    }
}

const update = async (task) => {
    try {
        return task.update()
    } catch (error) {
        throw error
    }
}

const remove = async (id) => {
    try {
        await Task.findOneAndDelete({ "_id": id })
        return
    } catch (error) {
        throw error
    }
}

module.exports = {
    getAll,
    getOne,
    getById,
    add,
    update,
    remove
}