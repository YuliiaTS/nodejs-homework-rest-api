const { User } = require('../../models/user');
const {
  RequserError,
  sendVerifyEmail,
  createVerifyMail,
} = require('../../helpers');

const resendVerifyEmail = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    throw RequserError(404, 'Not found');
  }
  if (user.verify) {
    throw RequserError(400, 'Verification has already been passed');
  }

  const mail = createVerifyMail(email, user.verificationToken);

  await sendVerifyEmail(mail);

  res.json({ message: 'Verification email sent' });
};

module.exports = resendVerifyEmail;