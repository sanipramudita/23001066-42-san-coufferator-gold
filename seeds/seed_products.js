/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('products').del()
  await knex('products').insert([
    {id: 1, name: 'Blend', price: 100000, stock: 10},
    {id: 2, name: 'Single Origin', price: 130000, stock: 3},
    {id: 3, name: 'Mixed', price: 180000, stock: 8}
  ]);
};
