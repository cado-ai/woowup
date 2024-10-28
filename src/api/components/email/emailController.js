const EmailService = require('./emailService');

exports.sendEmail = async (req, res, next) => {
    console.log('sendEmail');
    try {
        await EmailService.sendEmailWithDifferentProvider()
        res.sendStatus(200);
    } catch (err) {
        next(err);
    }
};

