const { Router } = require('express')
const controller = require('../controllers/users')
const auth = require('../controllers/auth')
const router = Router()

router.post('/', auth.setPassword, controller.create)
router.get('/login', auth.checkPassword, controller.getOne)
router.delete('/:user_id', controller.delete)
router.put('/:user_id', auth.setPassword, controller.update)


module.exports = router