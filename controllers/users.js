const model = require('../models/users')
const entriesModel = require('../models/entries')
module.exports = {
    getOne(req, res, next) {
        let uid
        let { email, password } = req.query
        return model.getOne(email, password)
        .then(id => {
            uid = id[0].id
            return entriesModel.getAll(id[0].id)
        })
        .then(entries => res.status(201).json(Object.assign({ id: uid} , entries)))
        .catch(e => next({
			status: 404, 
			message: 'User not found',
			caught: e,
        }))
    },
    create(req, res, next) {
        let {email, name, password, cycle_length} = req.body
        return model.create({email, name, password, cycle_length})
        .then(id => res.status(201).json({ id: id[0] }))
        .catch(e => next({
			status: 422, 
			message: 'Failed to create entry',
			caught: e,
        }))
    }
}