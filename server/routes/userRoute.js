const express = require('express')
const router = express.Router()
const verifyToken = require('../middlewares/VerifyToken')
const {getAccount, postUserSetting} = require('../controllers/Account')

router.route('/user').get( verifyToken ,getAccount)
router.route('/user').post(verifyToken, postUserSetting)
module.exports = router