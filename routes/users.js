const { Router } = require('express')
const controller = require('../controllers/users')
const router = Router()

router.post('/', controller.create)
router.get('/login', controller.getOne)


module.exports = router