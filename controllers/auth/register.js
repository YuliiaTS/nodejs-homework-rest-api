const bcrypt = require('bcryptjs');
const gravatar = require('gravatar');

const {User} = require('../../models/user')

const {RequestError, sendVerifyEmail, createVerifyMail} = require('../../helpers');
const { nanoid } = require('nanoid');

const register = async(req, res) => {
    const {password, email, subscription} = req.body;
    const user = await User.findOne({email});
    if(user) {
        throw RequestError(409, 'Email is use')
    }
    const hashPassword = await bcrypt.hash(password, 10)
    const avatarURL = gravatar.url(email);
    const verificationToken = nanoid();
    const result = await User.create({pasaword: hashPassword, email, subscription, avatarURL, verificationToken})
    
    const mail = createVerifyMail(email, verificationToken);

    await sendVerifyEmail(mail);

    res.status(201).json({
        email: result.email,
        subscription: result.subscription,
        avatarURL,
    })
}

module.exports = register;