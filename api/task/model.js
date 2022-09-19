const db = require('../../data/dbConfig')

function find() {
    return db('tasks')
}

function create(task) {
    return db('tasks')
        .insert(task)
        .then(([task_id]) => {
            return db('tasks')
                .where('task_id', task_id)
        })
}

module.exports = {
    find,
    create
}