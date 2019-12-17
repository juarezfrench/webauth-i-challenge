
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'Fred', password: 'pass'},
        {username: 'Barney',password: 'pass'},
        {username: 'Wilma',password: 'pass'},
        {username: 'Betty',password: 'pass'}
      ]);
    });
};   
