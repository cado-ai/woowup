const { rootDomain } = require('../../config');

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // Escapa caracteres especiales de regex
}

const rootDomainRegex = new RegExp(`^${escapeRegExp(rootDomain)}$`);
const whitelist = [/localhost/i, rootDomainRegex];

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
