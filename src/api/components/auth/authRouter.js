const router = require('express').Router();
const { validateRequest } = require('../../middleware');
const {
  loginValidator,
} = require('./authValidator');
const {
  login,
} = require('./authController');

/**
 * @swagger
 * paths:
 *  /auth/login:
 *   post:
 *    summary: Create JWT and get information of client.
 *    security: [] 
 *    tags: [Auth]
 *    consumes:
 *      - application/json
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              phone:
 *                type: "string"
 *              password:
 *                type: "string"
 *            required:
 *              - phone
 *              - password
 *    responses:
 *      201:
 *        description: Created
 *      400:
 *        description: Bad Request
 *      422:
 *        description: Invalid request
 *      500:
 *        description: Internal Server Error
 */
router.post('/login', validateRequest(loginValidator), login);

module.exports = router;
