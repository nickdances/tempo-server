const knex = require('../knex')

module.exports = {
	// C
	create(body) {
		// validate body
		return knex('resources')
		.insert(body)
		.then(created => created[0])
	},
	// R
	getOne(id) {
		//check id
	 return knex('resources')
		.where({ id })
		.returning('*')
		.then(found => found[0])
	},

	getAll() {
		return knex('resources')
		.then(found => found)
	},

	// U 
	update(id, body) {
		return knex('resources')
		.where({ id })
		.update(body)
		.returning('*')
		.then(updated => updated[0])
	},

	// D
	delete(id) {
		return knex('resources')
		.where({ id })
		.del()
		.returning('*')
		.then(deleted => deleted[0])
	}
}
