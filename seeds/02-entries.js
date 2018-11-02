
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('entries').del()
    .then(function () {
      // Inserts seed entries
      return knex('entries').insert([
        {id: 1, user_id: 1, date: new Date('2018-10-01'), flow: false, temp: 98.60},
        {id: 2, user_id: 1, date: new Date('2018-10-02'), flow: true, temp: 98.60},
        {id: 3, user_id: 1, date: new Date('2018-10-03'), flow: true, temp: 98.60},
        {id: 4, user_id: 1, date: new Date('2018-10-04'), flow: true, temp: 98.60},
        {id: 5, user_id: 1, date: new Date('2018-10-05'), flow: true, temp: 98.60},
        {id: 6, user_id: 1, date: new Date('2018-10-06'), flow: false, temp: 98.60},
        {id: 7, user_id: 1, date: new Date('2018-10-07'), flow: false, temp: 98.60},
        {id: 8, user_id: 1, date: new Date('2018-10-08'), flow: false, temp: 98.60},
        {id: 9, user_id: 1, date: new Date('2018-10-09'), flow: false, temp: 98.60},
        {id: 10, user_id: 1, date: new Date('2018-10-10'), flow: false, temp: 98.60},
        {id: 11, user_id: 1, date: new Date('2018-10-11'), flow: false, temp: 98.60},
        {id: 12, user_id: 1, date: new Date('2018-10-12'), flow: false, temp: 98.60},
        {id: 13, user_id: 1, date: new Date('2018-10-13'), flow: false, temp: 99.60},
        {id: 14, user_id: 1, date: new Date('2018-10-14'), flow: false, temp: 99.60},
        {id: 15, user_id: 1, date: new Date('2018-10-15'), flow: false, temp: 99.60},
        {id: 16, user_id: 1, date: new Date('2018-10-16'), flow: false, temp: 99.60},
        {id: 17, user_id: 1, date: new Date('2018-10-17'), flow: false, temp: 98.60},
        {id: 18, user_id: 1, date: new Date('2018-10-18'), flow: false, temp: 98.60},
        {id: 19, user_id: 1, date: new Date('2018-10-19'), flow: false, temp: 98.60},
        {id: 20, user_id: 1, date: new Date('2018-10-20'), flow: false, temp: 98.60},
        {id: 21, user_id: 1, date: new Date('2018-10-21'), flow: false, temp: 98.60},
        {id: 22, user_id: 1, date: new Date('2018-10-22'), flow: false, temp: 98.60},
        {id: 23, user_id: 1, date: new Date('2018-10-23'), flow: false, temp: 98.60},
        {id: 24, user_id: 1, date: new Date('2018-10-24'), flow: false, temp: 98.60},
        {id: 25, user_id: 1, date: new Date('2018-10-25'), flow: false, temp: 98.60},
        {id: 26, user_id: 1, date: new Date('2018-10-26'), flow: false, temp: 98.60},
        {id: 27, user_id: 1, date: new Date('2018-10-27'), flow: false, temp: 98.60},
        {id: 28, user_id: 1, date: new Date('2018-10-28'), flow: false, temp: 98.60},
        {id: 29, user_id: 1, date: new Date('2018-10-29'), flow: false, temp: 98.60},
        {id: 30, user_id: 1, date: new Date('2018-10-30'), flow: false, temp: 98.60},
        {id: 31, user_id: 1, date: new Date('2018-10-31'), flow: false, temp: 98.60}

      ])
    })
    .then(() => {
      return knex.raw(
          'SELECT setval(\'entries_id_seq\', (SELECT MAX(id) FROM entries));'
      )
    })
}
