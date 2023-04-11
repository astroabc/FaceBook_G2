const Account = require('../models/Account.js')
const argon2 = require('argon2')

const getAccount = async(req,res)=>{
    try {
        const account = await Account.find()
        res.status(200).json({
            user: account,
            success: true,
            message: 'Account fetched successfully'
        });
    } catch (error) {
        res.status(404).json({ 
            success:false, 
            message: error.message 
        });
    }
}

const postUserSetting = async(req,res)=>{
    const {avatar,user, pass, email, id} = req.body
    try {
        const hashedPassword = await argon2.hash(pass)
        const update = await Account.findByIdAndUpdate(id, {avatar, user, email, pass: hashedPassword}, {new: true})
        await update.save()
        res.status(200).json({
            success: true,
            message: "Avatar updated successfully",
            account: update
        })
    } catch (error) {
        res.status(404).json({ 
            success:false, 
            message: error.message 
        });
    }
}

module.exports = {
    getAccount, postUserSetting
}