/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('projects').truncate()
  await knex('projects').insert([
    {project_name: 'foo', project_description: 'project foo', project_completed: false},
    {project_name: 'bar', project_description: 'project bar', project_completed: false},
    {project_name: 'weyoo', project_description: 'weyoo weyoo!', project_completed: false}
  ]);
};
