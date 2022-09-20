const express = require('express')
const Task = require('./model')

const router = express.Router()

router.get('/', async (req, res) => {
    const request = await Task.find()
    res.status(200).json(request)
})

router.post('/', async (req, res) => {
    const { task_description,  project_id } = req.body
    if(!('task_description' in req.body)
        || task_description.trim() === ''
        || task_description === null
        || !project_id
    ) {
        res.status(400).json({message: 'description and project id required'})
    } else {
        const newTask = await Task.create(req.body)
        res.status(201).json(newTask.resource_name)
    }
})

module.exports = router


