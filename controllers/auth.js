// Check password against hash in db
// if match call next 
// if not match respond 404 
const userModel = require('../models/users')
const bcrypt = require('bcrypt')
const saltRounds = 10

module.exports = {
    setPassword(req, res, next) {
        if (!req.body.password) return next()

        bcrypt.hash(req.body.password, saltRounds)
        .then(hash => {
            req.hashedPassword = hash
            return next()
        })
        .catch(e => next({
                status: 422,
                caught: e,
                message: 'Failed to hash password'
            }))
    },
    checkPassword(req, res, next) {
        if (!req.query.password || !req.query.email) return next()
        
        userModel.getOne(req.query.email)
        .then(user => {
            req.user = { id: user[0].id, name: user[0].name }
            return bcrypt.compare(req.query.password, user[0].password)
        })
        .then(isMatch => {
            if (!isMatch) {
                return next({
                    status: 404, 
                    message: 'User not found'
                })
            } else {
                return next()
            }
        })
        .catch(e => next({
            caught: e,
            status: 404,
            message: 'User not found'
        }))
    }

}