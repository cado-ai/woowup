const MailgunService = require("../../../services/mailgun");

exports.sendEmailWithMailgun = async (to, subject, message) => {

    const mailgunService = new MailgunService();

    // Envía el correo
    try {
        await mailgunService.sendEmail(to, subject, message);
        console.log('Email sent successfully');
        return true;
    } catch (error) {
        console.error('Error al enviar el correo:', error);
        throw new Error('Error al enviar el correo con Mailgun');
    }
};