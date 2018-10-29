const model = require('../models/entries')

module.exports = {
    getAll(req, res, next) {
        let user = req.params.user_id
        return model.getAll(user)
        .then(entries => res.status(202).json(entries))
        .catch(e => next({
			status: 404, 
			message: 'Resource not found',
			caught: e,
        }))
    }
}