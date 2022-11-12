/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('week_table').del()
  await knex('week_table').insert([
    {id: 1, day: 'Sunday'},
    {id: 2, day: 'Monday'},
    {id: 3, day: 'Tuesday'},
    {id: 4, day: 'Wednesday'},
    {id: 5, day: 'Thursday'},
    {id: 6, day: 'Friday'},
    {id: 7, day: 'Saturday'}
  ]);
};
