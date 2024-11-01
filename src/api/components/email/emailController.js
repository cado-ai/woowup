const EmailService = require('./emailService');

exports.sendEmail = async (req, res, next) => {
    const data = req.body;
    try {
        const status_send_email = await EmailService.sendEmailWithDifferentProvider({ data })
        res.status(200).send(status_send_email ? 'Email sent successfully' : 'Error sending email');
    } catch (err) {
        next(err);
    }
};

