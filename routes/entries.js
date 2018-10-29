const {Router} = require('express')
const controller = require('../controllers/entries')
const router = Router()

// router.post('/:user_id', controller.create)
// router.put('/:entry_id', controller.update)
// router.delete('/:entry_id', controller.delete)
router.get('/:user_id', controller.getAll)

module.exports = router