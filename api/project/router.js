// build your `/api/projects` router here
const express = require('express')
const Project = require('./model')

const router = express.Router()

router.get('/', async (req, res) => {
    const request = await Project.find()
    res.status(200).json(request)
})

module.exports = router
