const Account = require('../models/Account.js')
const argon2 = require('argon2')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const signin = async (req, res) => {
    const { user, pass } = req.body
    if (!user || !pass) {
        return res.status(400).json({
            success: false,
            message: "Missing username or password"
        })
    }

    try {
        const username = await Account.findOne({ user })
        if (!username) {
            return res.status(400).json({
                success: false,
                message: 'Incorrect username/password'
            })
        }

        //Verify password
        const passCorrect = await argon2.verify(username.pass, pass)
        if (!passCorrect) {
            return res.status(400).json({
                success: false,
                message: 'Incorrect username/password'
            })
        }

        //Success
        //Return accessToken
        const accessToken = jwt.sign(
            { userID: username._id }, process.env.APP_SECRET
        )
        res.json({
            userID: username._id,
            user: username.user,
            email: username.email,
            pass: username.pass,
            avatar: username.avatar,
            success: true,
            message: 'User logged in successfully',
            accessToken
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: 'Internal server error' })
    }
}

module.exports = { signin }