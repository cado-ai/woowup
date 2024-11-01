const path = require('path');
const dotenv = require('dotenv');
dotenv.config({
  path: path.join(__dirname, `../../.env`),
});

module.exports = {
  // App
  port: process.env.PORT,
  rootDomain: process.env.ROOT_DOMAIN,
  environment: process.env.NODE_ENV,
  apikeySendGrid: process.env.SENDGRID_API_KEY,
  apikeyMailgun: process.env.MAILGUN_API_KEY,
  domainMailgun: process.env.MAILGUN_DOMAIN,
  emailFrom: process.env.EMAIL_FROM,

};
