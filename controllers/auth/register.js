const {User} = require('../../models/user')

const {RequestError} = require('../../helpers')

const register = async(req, res) => {
    const {password, email, subscription} = req.body;
    const user = await User.findOne({email});
    if(user) {
        throw RequestError(409, 'Email is use')
    }
    const result = await User.create({password, email, subscription})
    
    res.status(201).json({
        email: result.email,
        subscription: result.subscription,
    })
}

module.exports = register;