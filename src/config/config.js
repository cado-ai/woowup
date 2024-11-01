const path = require('path');
const dotenv = require('dotenv');
const email = require('../api/components/email');

const environment = process.env.NODE_ENV;
dotenv.config({
  path: path.join(__dirname, `../../.env`),
});

module.exports = {
  // App
  port: process.env.PORT,
  environment: process.env.NODE_ENV,
  rootDomain: process.env.ROOT_DOMAIN,
  apikeySendGrid: process.env.SENDGRID_API_KEY,
  apikeyMailgun: process.env.MAILGUN_API_KEY,
  domainMailgun: process.env.MAILGUN_DOMAIN,
  emailFrom: process.env.EMAIL_FROM,
};
