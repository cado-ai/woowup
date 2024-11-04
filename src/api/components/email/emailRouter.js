const router = require('express').Router();
const e = require('express');
const { sendEmail } = require('./emailController');
const { sendEmailValidate } = require('./emailValidator');
const {validateRequest} = require('../../middleware');
const authorizeUser = require('../../middleware/authorizeUser');

/**
 * @swagger
 * paths:
 *  /email/send-email:
 *   post:
 *    summary: Send email
 *    security:
 *     - bearerAuth: [] 
 *    tags: [Email]
 *    consumes:
 *      - application/json
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              to:
 *                type: "string"
 *              subject:
 *                type: "string"
 *              message:
 *                type: "string"
 *            required:
 *              - to
 *              - subject
 *              - message        
 *    responses:
 *      200:
 *        description: Send Successfully
 *      400:
 *        description: Bad Request
 *      422:
 *        description: Invalid request
 *      500:
 *        description: Internal Server Error
 */
router.post(
    '/send-email',
    validateRequest(sendEmailValidate),
    authorizeUser(),
    sendEmail
);

module.exports = router;
