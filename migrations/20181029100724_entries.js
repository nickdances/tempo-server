
exports.up = function(knex, Promise) {
    return knex.schema.createTable('entries', table => {
        table.increments()
        table.timestamps(true, true)
        table.timestamp('date').notNullable()
        table.boolean('flow')
        table.integer('temp').unsigned()
        table.integer('user_id').notNullable()
        table.foreign('user_id').references('id').inTable('users') 
    })
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('entries')
}
