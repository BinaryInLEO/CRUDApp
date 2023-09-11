/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('items', table => {
    table.increments('id').primary();
    table.integer('UserID').unsigned();
    table.foreign('UserID').references('users.id');
    table.string('ItemName').notNullable();
    table.string('Description').notNullable();
    table.string('Quantity').notNullable();
})};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.alterTable('items', table => {
    table.dropForeign('UserID')
  })
  .then(function() {
    return knex.schema.dropTableIfExists('items');
  });
};
