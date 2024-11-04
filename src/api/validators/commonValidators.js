const joi = require('joi');

exports.phone = joi
  .string()
  .regex(/^\+[1-9]\d{1,14}$/)
  .messages({
    'string.base': `Teléfono debe ser de tipo 'texto'`,
    'string.pattern.base': `Formato de teléfono no es válido`,
    'string.empty': `Teléfono es un campo obligatorio`,
    'any.required': `Teléfono es un campo obligatorio`,
  });
