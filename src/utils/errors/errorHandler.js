const BaseError = require('./baseError');

const isOperationalError = (error) => {
    if (error instanceof BaseError) {
        return error.isOperational;
    }

    return false;
};

const logError = (error, level) => {
    const { code, stack, message } = error;

    console.log(level, {
        code,
        stack,
        message,
        timestamp: new Date().toString(),
    });
};

const notifyError = (error, context) => {
    console.error(`Error => CODE: ${error.statusCode} MESSAGE: ${error.message} `)
};

exports.handleError = (error, context) => {
    // Determine whether error is operational or not
    const isOperational = isOperationalError(error);

    // Notify the developers if the error is not operational or has status 500 (internal server error)
    if (!isOperational || error.statusCode === 500) {
        //notifyError(error, context);
    } else {
        notifyError(error, context);
    }

    // Crash the application if error is not operational. Wait until notification is sent.
    /*if (!isOperational) {
        setTimeout(() => {
            process.exit(1);
        }, 1000);
    }*/
};