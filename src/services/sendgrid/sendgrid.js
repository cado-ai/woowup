const sgMail = require('@sendgrid/mail');

class SendGridService {
  constructor(apiKey) {
    sgMail.setApiKey(apiKey);
  }

  async sendEmail(to, subject, text, html) {
    try {
      const msg = {
        to,
        from: 'barcealex1014@hotmail.com',
        subject,
        text,
        html,
      };

      const response = await sgMail.send(msg);
      console.log('Correo enviado:', response);
    } catch (error) {
      console.error('Error al enviar email:', error);
      if (error.response) {
        console.error('Detalles del error:', error.response.body);
      }
    }
  }
}

module.exports = SendGridService;