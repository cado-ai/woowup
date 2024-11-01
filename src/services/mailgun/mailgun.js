const mailgun = require('mailgun-js');
const {
    apikeyMailgun: apiKey,
    domainMailgun: domain,
    emailFrom: from,
} = require('../../config');

class MailgunService {
    constructor() {
        this.mg = mailgun({ apiKey, domain });
    }

    async sendEmail(to, subject, text, html = null) {
        try {
            const data = {
                from: from,
                to,
                subject,
                text,
                html,
            };

            const response = await this.mg.messages().send(data);
            console.log('Correo enviado:', response);
        } catch (error) {
            console.error('Error al enviar el correo:', error);
            throw new Error('Fallo en el envío del correo');
        }
    }
}

module.exports = MailgunService;
