/**
 * @module models/users
 */
const knex = require('../knex')

/**
 * @typedef {Object} User
 * @property {string} name
 * @property {string} password - bcrypt hash 
 * @property {number} [cycle_length=28] - menstrual cycle length 
 */

 /**
  * @typedef {User} UserWithID
  * @property {number} id - database generated User ID
  */
module.exports = {
    /** getOne - query database for one user 
     *  @param {string} email
     *  @returns {Array<UserWithID>} - {@link module:models/users~UserWithID|UserWithID}
     */
    getOne: function(email) {
        return knex('users')
        .select('id', 'name', 'password', 'cycle_length')
        .where('email', email)
    },
    /** create - create one user in database
     *  @param {User} body - {@link module:models/users~User|User}
     *  @returns {number} - User ID
     */
    create: function(body) {
        return knex('users')
        .insert(body)
        .returning('id')
    },
    /** update - delete one user from database 
     *  @param {number} id - User ID
     *  @param {User} body - {@link module:models/users~User|User} 
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