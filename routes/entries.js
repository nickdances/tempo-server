const {Router} = require('express')
const controller = require('../controllers/entries')
const router = Router()

router.post('/:userID', controller.create)
router.put('/:entryID', controller.update)
router.delete('/:entryID', controller.delete)
router.get('/:userID', controller.getAll)