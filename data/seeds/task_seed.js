/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('tasks').truncate()
  await knex('tasks').insert([
    {task_description: 'foo', task_notes: 'some notes foo', task_completed: false, project_id: 1},
    {task_description: 'bar', task_notes: 'bar notes', task_completed: false, project_id: 2},
    {task_description: 'baz', task_notes: 'weyoo baz', task_completed: false, project_id: 3}
  ]);
};
