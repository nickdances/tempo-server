
exports.up = function(knex, Promise) {
    return knex.schema.createTable('entries', table => {
        table.increments()
        table.timestamps(true, true)
        table.timestamp('date').notNullable()
        table.boolean('flow').notNullable()
        table.decimal('temp').notNullable()
        table.integer('user_id').notNullable()
        table.foreign('user_id').onDelete('CASCADE').references('id').inTable('users') 
    })
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('entries')
}
