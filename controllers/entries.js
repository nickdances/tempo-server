const model = require('../models/entries')

module.exports = {
    getAll(req, res, next) {
        let user = req.params.user_id

        return model.getAll(user)
        .then(entries => res.status(202).json(entries))
        .catch(e => next({
			status: 404, 
			message: 'Entries not found',
			caught: e,
        }))
    },
    create(req, res, next) {
        let {flow, date, temp} = req.body
        let user = req.params.user_id

        if (!date instanceof Date) {
            date = new Date(date)
        }

        return model.create(user, {flow, date, temp})
        .then(id => res.status(201).json(id[0]))
        .catch(e => next({
			status: 422, 
			message: 'Failed to create entry',
			caught: e,
        }))
    }
}