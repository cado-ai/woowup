const AuthService = require('./authService');

exports.login = async (req, res, next) => {
  const method = "AuthController.login"

  console.info(`[${method}] Ingresando al sistema con las siguientes datos del nuevo usuario => ${JSON.stringify(req.body)} `)

  try {

    const jwt = await AuthService.login(req.body);

    console.info(`[${method}] Response del login del siguiente usuario ${req.body.phone} es => ${JSON.stringify(jwt)}`)

    res.status(201).json(jwt)

  } catch (err) {
    console.log(err)
    next(err);
  }
};


