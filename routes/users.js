const { Router } = require('express')
const controller = require('../controllers/users')
const router = Router()

router.post('/', controller.create)
router.get('/login', controller.getOne)
router.delete('/:user_id', controller.delete)
router.put('/:user_id', controller.update)


module.exports = router