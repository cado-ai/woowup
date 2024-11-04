const { NotFoundError } = require('../../utils/errors/httpErrors');

const handleNotFound = (req, res, next) => {
  const error = new NotFoundError(
    `Invalid request ${req.method} ${req.originalUrl} by IP ${req.ip}`,
  );

  next(error);
};

module.exports = handleNotFound;
