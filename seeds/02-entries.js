
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('entries').del()
    .then(function () {
      // Inserts seed entries
      return knex('entries').insert([
        {id: 1, user_id: 1, date: new Date('2018-10-29'), flow: true, temp: 98.86},
        {id: 2, user_id: 1, date: new Date('2018-10-28'), flow: true, temp: 98.83},
        {id: 3, user_id: 1, date: new Date('2018-10-27'), flow: false, temp: 98.84},
        {id: 4, user_id: 2, date: new Date('2018-10-29'), flow: false, temp: 98.86},
        {id: 5, user_id: 2, date: new Date('2018-10-28'), flow: true, temp: 98.83},
        {id: 6, user_id: 2, date: new Date('2018-10-27'), flow: true, temp: 98.84},
        {id: 7, user_id: 3, date: new Date('2018-10-29'), flow: false, temp: 98.89},
        {id: 8, user_id: 3, date: new Date('2018-10-28'), flow: true, temp: 98.83},
        {id: 9, user_id: 3, date: new Date('2018-10-27'), flow: true, temp: 98.84}
      ])
    })
    .then(() => {
      return knex.raw(
          'SELECT setval(\'entries_id_seq\', (SELECT MAX(id) FROM entries));'
      )
    })
}
