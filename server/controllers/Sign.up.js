const Account = require('../models/Account.js')
const argon2 = require('argon2')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const signup = async (req, res) => {
    const { user, pass, name,  email } = req.body
    if (!user || !pass || !name) {
        return res.status(400).json({
            success: false,
            message: 'Missing user/pass or name'
        })
    }

    try {
        const username = await Account.findOne({ user })
        if (username) {
            return res.status(400).json({
                success: false,
                message: 'Username already taken'
            })
        }
        // Success
        const hashedPassword = await argon2.hash(pass)
        const newAccount = new Account({
            user, pass: hashedPassword, name, email
        })
        await newAccount.save()
        // Return token for res
        const accessToken = jwt.sign({ userID: newAccount._id }, process.env.APP_SECRET)
        res.json({
            success: true,
            message: 'Account created successfully',
            accessToken
        })

    } catch (error) {
        console.log(error.message)
        res.status(500).json({ success: false, message: 'Internal server error' })
    }
}

module.exports = { signup }