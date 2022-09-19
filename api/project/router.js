// build your `/api/projects` router here
const express = require('express')
const Project = require('./model')

const router = express.Router()

router.get('/', async (req, res) => {
    await Project.find()
        .then(request => {
            const returnedRequest = request.map(project => {
                return {...project, project_completed: project.project_completed === 1 ? true : false}
            })
            console.log(returnedRequest)
            res.status(200).json(returnedRequest)
        })
})

router.post('/', async (req, res) => {
    const { project_name } = req.body
    if(!('project_name' in req.body) 
        || project_name.trim() === ''
        || project_name === null
    ) {
        res.status(400).json({message: 'project name required'})
    } else {
        await Project.create(req.body)
            .then(newProject => {
                 res.status(201).json({...newProject[0], project_completed: newProject[0].project_completed === 1 ? true : false})
            })

        // const returnedProject = {
        //     project_id: newProject.project_id,
        //     project_name: newProject.project_name,
        //     project_description: newProject.project_description,
        //     project_completed: newProject.project_completed === 1 ? true : false
        // }

        // newProject.project_completed = newProject.project_completed === 1 ? true : false
        // console.log(returnedProject)
        // res.status(201).json(returnedProject)
    }
})

module.exports = router
