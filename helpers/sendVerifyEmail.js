const sgMail = require('@sendgrid/mail');
require("dotenv").config();
const { RequestError } = require('./RequestError');

const { SENDGRID_API_KEY, SENDGRID_FROM } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendVerifyEmail = async data => {
  try {
    const mail = { ...data, from: SENDGRID_FROM };
    await sgMail.send(mail);
    return true;
  } catch (error) {
    throw RequestError(error.status, error.message);
  }
};

module.exports = sendVerifyEmail;

// const nodemailer = require ('nodemailer');
// require("dotenv").config();
// const { RequestError } = require('./RequestError');

// const { META_PASSWORD } = process.env;

// const nodemailerConfig = {
//   host: 'smtp.meta.ua',
//   port: 465,
//   secure: true,
//   auth: {
//     user: 'kovalchukua@meta.ua',
//     pass: META_PASSWORD,
//   }
// }

// const transport = nodemailer.createTransport(nodemailerConfig);
  
// const sendVerifyEmail = async data => {
//   try {
//     const mail = { ...data, from: 'kovalchukua@meta.ua'};
//     await transport.sendMail(mail);
//     return true;
//   } catch (error) {
//     throw RequestError(error.status, error.message);
//     }
// };
    
//   module.exports = sendVerifyEmail;