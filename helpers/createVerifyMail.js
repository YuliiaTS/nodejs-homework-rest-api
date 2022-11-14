const { BASE_URL } = process.env;

const createVerifyMail = (email, verificationToken) => {
  return {
    to: email,
    subject: 'Verify email',
    html: `<a href="${BASE_URL}/api/auth/verify/${verificationToken}" target="_blank">Verify your email</a>`,
  };
};

module.exports = createVerifyMail;