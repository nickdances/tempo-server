
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', table => {
        table.increments()
        table.timestamps(true, true)
        table.string('name').notNullable()
        table.string('password').notNullable()
        table.integer('cycle_length')
    })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users')
}
