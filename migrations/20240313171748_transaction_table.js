/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('transaction', function (table) {
        table.increments('id').primary();
        table.string('product_name').unsigned
        table.foreign('product_name').references('products.name')
        table.integer('quantity').notNullable();
        table.string('grind').notNullable();
        table.integer('user_id').unsigned();
        table.integer('product_id').unsigned();
        table.foreign('user_id').references('users.id');
        table.foreign('product_id').references('products.id');
        table.timestamps(true, true);
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('transaction')
};
