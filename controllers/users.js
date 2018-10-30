const model = require('../models/users')
const entriesModel = require('../models/entries')
module.exports = {
    getOne(req, res, next) {
        let id
        let name
        let { email, password } = req.query
        
        return model.getOne(email, password)
        .then(user => {
            id = user[0].id
            name = user[0].name
            return entriesModel.getAll(id)
        })
        .then(entries => res.status(201).json(Object.assign({ id, name, entries })))
        .catch(e => next({
			status: 404, 
			message: 'User not found',
			caught: e,
        }))
    },
    create(req, res, next) {
        let {email, name, password, cycle_length} = req.body
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
        let { email, name, password, cycle_length } = req.body
        return model.update(req.params.user_id, { email, name, password, cycle_length })
        .then(user => res.status(201).json({ id: user[0] }))
        .catch(e => next({
			status: 422, 
			message: 'Failed to update user',
			caught: e,
        }))
    }
}