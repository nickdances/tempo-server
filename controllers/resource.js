const model = require('../models/resource')

module.exports = {
	// C
	create(req, res, next) {
		return model.create(req.params.id)
		.then(resource => res.status(204).json(resource))
		.catch(e => next({
			status: 422,
			message: 'Failed to create resource',
			caught: e,
		}))
	},
	// R
	getAll(req, res, next) {
		return model.getAll()
		.then(resources => res.status(202).json(resources))
		.catch(e => next({
			status: 404,
			message: 'Resources not found',
			caught: e,
		}))
	},

	getOne(req, res, next) { 
		return model.getOne(req.params.id)
		.then(resource => res.status(202).json(resource))
		.catch(next({
			status: 404, 
			message: 'Resource not found',
			caught: e,
		}))
	},

	update(req, res, next) {
		return model.update(req.params.id, req.body)
		.then(updated => res.status(202).json(updated))
		.catch(e => next({
			status: 422, 
			message: 'Failed to update resource',
			caught: e,
		}))
	},

	delete(req, res, next) {
		return model.delete(req.params.id)
			.then(deleted => res.status(202).json(deleted))
		.catch(e => next({
			status: 422, 
			message: 'Failed to delete resource',
			caught: e,
		}))
	}
}

