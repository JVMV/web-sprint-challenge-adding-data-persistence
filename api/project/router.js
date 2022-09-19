// build your `/api/projects` router here
const express = require('express')
const Project = require('./model')

const router = express.Router()

router.get('/', async (req, res) => {
    const request = await Project.find()
    res.status(200).json(request)
})

router.post('/', async (req, res) => {
    const { project_name } = req.body
    if(!('project_name' in req.body) 
        || project_name.trim() === ''
        || project_name === null
    ) {
        res.status(400).json({message: 'project name required'})
    } else {
        const newProject = await Project.create(req.body)
        res.status(201).json(newProject)
    }
})

module.exports = router
