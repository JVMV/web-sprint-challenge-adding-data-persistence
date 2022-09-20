const db = require('../../data/dbConfig')

function find() {
    return db('resources')
}

function create(resource) {
    return db('resources')
        .insert(resource)
        .then(([resource_id]) => {
            return db('resources')
                .where('resource_id', resource_id)
        })
}

function checkName(resourceName) {
    return db('resources')
        .select('resource_id')
        .where('resource_name', resourceName)
}

module.exports = {
    find,
    create,
    checkName
}