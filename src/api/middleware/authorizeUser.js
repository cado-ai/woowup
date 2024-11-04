const {
  secret
} = require('../../config/config');
const { UnauthorizedError } = require('../../utils/errors/httpErrors');
const jwt = require('jsonwebtoken');

const authorizeUser = (guest = false) => {
  return (req, res, next) => {
    //Validate guest and user
    if (guest) {
      next();
    } else {
      const errorMessage = 'Su token ha caducado por favor vuelve a iniciar sesión';
      const errorMessageUnauthorized = 'Necesita ingresar un token de seguridad';

      const authHeader = req.headers.authorization;

      if (authHeader) {

        const token = authHeader.split(' ')[1];
        jwt.verify(token, secret, function (err, decoded) {
          if (err) {
            throw new UnauthorizedError(errorMessage);
          }
          next();

        })

      } else {
        throw new UnauthorizedError(errorMessageUnauthorized);
      }
    }



  };
};

module.exports = authorizeUser;
