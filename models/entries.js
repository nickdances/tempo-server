/**
 * @module models/entries 
 * */
const knex = require('../knex')

/** Object representing one {@link module:models/users~User|user's} data for one day
 *  @typedef {Object} Entry
    @property {boolean} flow - User report of menstruation
    @property {number} day
    @property {number} month 
    @property {number} temp - User Basal Body Temperature
 */

 /**
  * @typedef {Entry} EntryWithID
  * @property {number} id - database generated Entry ID
  */
module.exports = {
    /** getAll - query database for all entries for one user
     * @param {number} uid - User ID, foreign key in Entries database table
     * @returns {Array<EntryWithID>} - {@link module:models/entries~EntryWithID|EntryWithID}
    */
    getAll: function(uid) {
        return knex('entries')
        .select('id', 'date', 'temp', 'flow')
        .where('user_id', uid)
        .then(entries => transform(entries))
    },
    /** create - create one database entry for one User
     * @param {number} uid - User ID, foreign key in Entries database table
     * @param {Entry} body - {@link module:models/entries~Entry|Entry}
     * @returns {number}  - Created Entry ID
    */
    create: function(uid, body) {
        let entry = Object.assign({user_id: uid}, body)
        return knex('entries')
        .insert(entry)
        .returning('id')
    },
    /** update - modify one database entry for one User
     * @param {number} id - Entry ID
     * @param {Entry} body - {@link module:models/entries~Entry|Entry}
     * @returns {number} - Updated Entry ID
    */
    update: function(id, body) {
        return knex('entries')
        .where('id', id)
        .update(body)
        .returning('id')
    },
    /** delete - delete one database entry for one User
     * @param {number} id - Entry ID
     * @returns {number} - Deleted Entry ID
    */
    delete: function(id) {
        return knex('entries')
        .where('id', id)
        .del()
        .returning('id')
    }
}
    /** transform - form entries from database objects by extracting day and month and parsing numbers
     * @param {Array<Object>} entries - raw entries from database table
     * @returns {Array<EntryWithID>} - {@link module:models/entries~EntryWithID|EntryWithID}
     * @ignore
    */
function transform(entries) {
    return entries.map(entry => ({
            id:     +entry.id, 
            flow:    entry.flow,
            day:    +entry.date.getDate(),
            month:  +entry.date.getMonth(),
            temp:   +entry.temp
     }))
  }
