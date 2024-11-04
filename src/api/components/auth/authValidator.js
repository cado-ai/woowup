const joi = require('joi');
const {
  phone,
} = require('../../validators/commonValidators');


exports.loginValidator = joi.object({
  phone: phone.required(),
  password: joi.string().required().messages({
    'string.base': 'Contraseña debe ser de tipo texto',
    'string.empty': 'Contraseña es requerida',
    'any.required': 'Contraseña es requerida',
  }),
});

