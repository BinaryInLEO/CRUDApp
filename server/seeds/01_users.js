/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {id: 1, FirstName: 'John', LastName: 'Doe', Username: 'Doe', Password: '123456'},
    {id: 2, FirstName: 'Jimmy', LastName: 'Jim', Username: 'Jim', Password: '123456'},
    {id: 3, FirstName: 'Slim', LastName: 'Jim', Username: 'SlimJim', Password: 'BiteIntoASlimJim'},
    {id: 4, FirstName: 'Earthworm', LastName: 'Jim', Username: 'Worm', Password: 'Groovy'}
  ]);
};


// table.increments('id');
// table.string('FirstName');
// table.string('LastName');
// table.string('Username');
// table.string('Password')