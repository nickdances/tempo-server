const model = require('../models/users')
const entriesModel = require('../models/entries')
module.exports = {
    getOne(req, res, next) {
        let { name, id, cycle_length } = req.user

        return entriesModel.getAll(id)
        .then(entries => res.status(201).json({ id, name, cycle_length, entries }))
        .catch(e => next({
			status: 404, 
			message: 'User not found',
			caught: e,
        }))
    },
    create(req, res, next) {
        let {email, name, cycle_length} = req.body
        let password = req.hashedPassword
        if (!cycle_length) cycle_length = 28

        return model.create({email, name, password, cycle_length})
        .then(user => res.status(201).json({ id: user[0] }))
        .catch(e => next({
			status: 422, 
			message: 'Failed to create user',
			caught: e,
        }))
    },
    delete(req, res, next) {
        return model.delete(req.params.user_id)
        .then(user => res.status(201).json({id: user[0]}))
        .catch(e => next({
			status: 422, 
			message: 'Failed to delete user',
			caught: e,
        }))
    },
    update(req, res, next) {
        let { email, name, cycle_length } = req.body
        let password = req.hashedPassword
        return model.update(req.params.user_id, { email, name, password, cycle_length })
        .then(user => res.status(201).json({ id: user[0] }))
        .catch(e => next({
			status: 422, 
			message: 'Failed to update user',
			caught: e,
        }))
    }
}