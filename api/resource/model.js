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

module.exports = {
    find,
    create
}