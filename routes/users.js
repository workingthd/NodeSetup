const express = require('express')

const { userController } = require('../controllers')

const router = express.Router()

router.post('/create', userController.create)
router.get('/findAll', userController.findAll)
module.exports = router