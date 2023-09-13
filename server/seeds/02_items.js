/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('items').del()
  await knex('items').insert([
    {id: 1, UserID: 1, ItemName: 'Screwdriver', Description: 'A tool that tightens or loosens screws', Quantity: 1},
    {id: 2, UserID: 2, ItemName: '2x4', Description: 'A wooden plank', Quantity: 2},
    {id: 3, UserID: 3, ItemName: 'Slim Jim', Description: 'A dried meat snack', Quantity: 50},
    {id: 4, UserID: 4, ItemName: 'Worm', Description: 'A worm', Quantity: 1},
    {id: 5, UserID: 1, ItemName: 'Hammer', Description: 'A tool that embeds nails', Quantity: 1},
    {id: 6, UserID: 1, ItemName: 'nails', Description: 'A tools that bind objects physically', Quantity: 100},
    {id: 7, UserID: 2, ItemName: '4x4', Description: 'A wooden board', Quantity: 1},
    {id: 8, UserID: 2, ItemName: 'Hammer', Description: 'A tool that embeds nails', Quantity: 1},
    {id: 9, UserID: 3, ItemName: 'Spicy Slim Jims', Description: 'A spicy dried meat snack', Quantity: 20},
    {id: 10, UserID: 4, ItemName: 'Space Suit', Description: 'A suit for space travel', Quantity: 1},

  ]);
};


// table.increments('id');
// table.integer('UserID');
// table.foreign('UserID').references('users.id');
// table.string('ItemName');
// table.string('Description');
// table.string('Quantity')