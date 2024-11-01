const { sendEmailWithMailgun } = require("./emailHelper");


exports.sendEmailWithDifferentProvider = async ({ data }) => {
    const { to, subject, message } = data;
    if (!to || !subject || !message) {
        throw new Error('Missing required fields');
    }

    await sendEmailWithMailgun(to, subject, message);

    return true
};