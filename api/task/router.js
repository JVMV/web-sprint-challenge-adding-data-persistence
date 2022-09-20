const express = require('express')
const Task = require('./model')

const router = express.Router()

router.get('/', async (req, res) => {
    const request = await Task.find()
    const returnRequest = request.map(task => {
        return {...task, task_completed: task.task_completed === 0 ? false : true}
    })
    res.status(200).json(returnRequest)
})

router.post('/', async (req, res) => {
    const { task_description,  project_id } = req.body
    if(!('task_description' in req.body)
        || task_description.trim() === ''
        || task_description === null
        || !('project_id' in req.body)
        || typeof project_id !== 'number'
    ) {
        console.log('failed', task_description, project_id)
        res.status(400).json({message: 'description and project id required'})
    } else {
        const [newTask] = await Task.create(req.body)
        const returnTask = {...newTask, task_completed: newTask.task_completed === 0 ? false : true}
        res.status(201).json(returnTask)
    }
})

module.exports = router


