const { Router } = require('express')
const controller = require('../controllers/resource')
const router = Router()

// C
router.post('/', controller.create)
// R
router.get('/', controller.getAll)
router.get('/:id', controller.getOne)
// U 
router.put('/', controller.update)
// D
router.delete('/:id', controller.delete)

module.exports = router
