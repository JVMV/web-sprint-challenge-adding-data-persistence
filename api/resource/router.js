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
    } else {
        const [check] = await Resource.checkName(resource_name)
        console.log(check)
        if(check) {
            console.log(check)
            res.status(400).json({message: 'resource name is not unique'})
        } else {
            console.log(check)
            const [request] = await Resource.create(req.body)
            res.status(201).json({resource_name: request.resource_name})
            }
    }
})

module.exports = router