const db = require('../../data/dbConfig')

function find() {
    return db('projects')
}

function create(project) {
    return db('projects')
        .insert(project)
        .then(([project_id]) => {
            return db('projects')
                .where('project_id', project_id)
        })
}

module.exports = {
    find,
    create
}