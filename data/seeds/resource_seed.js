/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('resources').truncate()
  await knex('resources').insert([
    {resource_name: 'foo', resource_description: 'fooyou'},
    {resource_name: 'bar', resource_description: 'barloo'},
    {resource_name: 'weyoo', resource_description: 'weyoo'}
  ]);
};
