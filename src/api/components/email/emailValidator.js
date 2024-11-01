const joi = require('joi');

exports.sendEmailValidate = joi.object({
    to: joi.string().max(100).messages({
        'string.base': 'To debe ser texto',
        'string.empty': 'To es requerido',
        'string.max': 'To  puede tener máximo 100 caracteres',
        'any.required': 'To es requerido',
    }),
    subject: joi.string().max(100).messages({
        'string.base': 'Subject debe ser texto',
        'string.empty': 'Subject es requerido',
        'string.max': 'Subject  puede tener máximo 100 caracteres',
        'any.required': 'Subject es requerido',
    }),
    message: joi.string().max(200).messages({
        'string.base': 'Message debe ser texto',
        'string.empty': 'Message es requerido',
        'string.max': 'Message  puede tener máximo 200 caracteres',
        'any.required': 'Message es requerido',
    }),
});