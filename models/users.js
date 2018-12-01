/**
 * @module models/users
 */
const knex = require('../knex')

/**
 * @typedef {Object} User
 * @property {number} id
 * @property {string} name
 * @property {string} password - bcrypt hash 
 * @property {number} [cycle_length=28] - menstrual cycle length 
 */
module.exports = {
    /** getOne - query database for one user 
     *  @param {string} email
     *  @returns {Array<User>} 
     */
    getOne: function(email) {
        return knex('users')
        .select('id', 'name', 'password', 'cycle_length')
        .where('email', email)
    },
    /** create - create one user in database
     *  @param {Object} body
     *  @param {string} body.name
     *  @param {string} body.password - bcrypt hash 
     *  @param {number} [body.cycle_length=28] - menstrual cycle length 
     *  @returns {number} - User ID
     */
    create: function(body) {
        return knex('users')
        .insert(body)
        .returning('id')
    },
    /** update - delete one user from database 
     *  @param {number} id - User ID
     *  @param {Object} body
     *  @param {string} body.name
     *  @param {string} body.password - bcrypt hash 
     *  @param {number} [body.cycle_length=28] - menstrual cycle length
     *  @returns {number} - Updated User ID 
     */
    update: function(id, body) {
        return knex('users')
        .where('id', id)
        .update(body)
        .returning('id')
    },
    /** delete - delete one user from database 
     *  @param {number} id - User ID
     *  @returns {number} - Deleted User ID 
     */
    delete: function(id) {
        return knex('users')
        .where('id', id)
        .del()
        .returning('id')
    }
}