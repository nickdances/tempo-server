const bcrypt = require('bcrypt')
const saltRounds = 10
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return bcrypt.hash('abc', saltRounds)
  .then(hash => knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'nick', email: 'user1@sharkweek.net', password: hash, cycle_length: 28},
        {id: 2, name: 'shawn', email: 'user2@sharkweek.net', password: hash, cycle_length: 30},
        {id: 3, name: 'riley', email: 'user3@sharkweek.net', password: hash, cycle_length: 26}
      ])
    }))
    .then(() => {
      return knex.raw(
          'SELECT setval(\'users_id_seq\', (SELECT MAX(id) FROM users));'
      )
    })
}
