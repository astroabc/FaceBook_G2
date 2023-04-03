const express = require('express')
const router = express.Router()
const { signup } = require('../controllers/Sign.up')
const { signin } = require('../controllers/Sign.in.js')

//Login and Register Account
// @route POST /api/sign-in & /api/sign-up
router.route('/sign-in').post(signin)
router.route('/sign-up').post(signup)

module.exports = router