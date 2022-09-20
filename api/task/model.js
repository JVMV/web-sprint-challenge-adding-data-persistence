const db = require('../../data/dbConfig')

function find() {
    return db('tasks')
        .select('tasks.*', 'project_name', 'project_description')
        .leftJoin('projects', 'projects.project_id', 'tasks.project_id')
}

function create(task) {
    return db('tasks')
        .insert(task)
        .then(([task_id]) => {
            return db('tasks')
                .where('task_id', task_id)
        })
}

function checkProjectId(project_id) {
    return db('projects')
        .where('project_id', project_id)
}

module.exports = {
    find,
    create,
    checkProjectId
}