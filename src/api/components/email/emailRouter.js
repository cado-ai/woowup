const router = require('express').Router();
const { sendEmail } = require('./emailController');

/**
 * @swagger
 * paths:
 *  /email/v1/send-email:
 *   post:
 *    summary: Send email
 *    security: [] 
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
    sendEmail
);

module.exports = router;
