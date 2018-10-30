const knex = require('../knex')

module.exports = {
    getOne(email) {
        return knex('users')
        .select('id', 'name', 'password')
        .where('email', email)
    },
    create(body) {
        return knex('users')
        .insert(body)
        .returning('id')
    },
    delete(id) {
        return knex('users')
        .where('id', id)
        .del()
        .returning('id')
    },
    update(id, body) {
        return knex('users')
        .where('id', id)
        .update(body)
        .returning('id')
    }
}