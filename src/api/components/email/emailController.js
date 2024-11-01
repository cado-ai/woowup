const EmailService = require('./emailService');

exports.sendEmail = async (req, res, next) => {
    const data = req.body;
    try {
        await EmailService.sendEmailWithDifferentProvider({data})
        res.sendStatus(200);
    } catch (err) {
        next(err);
    }
};

