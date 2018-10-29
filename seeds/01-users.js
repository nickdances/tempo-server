
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'nick', password: 'abc', cycle_length: 28},
        {id: 2, name: 'sean', password: '123', cycle_length: 30},
        {id: 3, name: 'riley', password: 'xyz', cycle_length: 26}
      ])
    })
    .then(() => {
      return knex.raw(
          'SELECT setval(\'users_id_seq\', (SELECT MAX(id) FROM users));'
      )
    })
}
