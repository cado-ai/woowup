const { secret, time } = require('../../../config');
const jwt = require('jsonwebtoken')


exports.login = async ({ phone, password }) => {
  try {

    const token = jwt.sign({ phone, password }, secret, { expiresIn: time })

    console.log(`Se ha generado un token para el usuario ${phone}`)

    return {
      token: token
    }
  } catch (error) {
    console.log(error)
    throw new Error('Error al generar token')
  }
};

