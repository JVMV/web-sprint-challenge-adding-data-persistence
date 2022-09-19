const express = require('express')
const Resource = require('./model')

const router = express.Router()

router.get('/', async (req, res) => {
    const request = await Resource.find()
    res.status(200).json(request)
})

router.post('/', async (req, res) => {
    const { resource_name } = req.body

    if(!('resource_name' in req.body)
        || resource_name.trim() === ''
        || resource_name === null
    ) {
        res.status(400).json({message: 'resource_name required'})
    } else{
        const request = await Resource.create(req.body)
        res.status(201).json(request)
    }
})

module.exports = router