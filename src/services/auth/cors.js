const { rootDomain } = require('../../config');

function escapeRegExp(string) {
  console.log('rootDomain', rootDomain)
  console.log('string',string)
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

const whitelist = [/localhost/i,/https:\/\/woowup-079b50bd940f.herokuapp.com/i];

exports.corsOptions = {
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'X-Access-Token',
    'Authorization',
  ],
  methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
  origin: (origin, callback) => {
    if (!origin || whitelist.some((pattern) => pattern.test(origin))) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  preflightContinue: false,
};
