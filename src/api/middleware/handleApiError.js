const { environment } = require('../../config');
const { handleError } = require('../../utils/errors/errorHandler');

const createErrorContext = (req) => {
  const { session, body, query, params, cookies, headers, url, method } = req;
  //const { userId, userEmail, id: sessionId } = session;

  const context = {
    //user_id: userId || sessionId,
    //user_email: userEmail,
    environment,
    action: method,
    url,
    query,
    params,
    body,
    session,
    cookies,
    headers,
  };

  return context;
};

/* eslint-disable no-unused-vars*/
const handleApiError = async (error, req, res, next) => {

  const context = createErrorContext(req);
  handleError(error, context); // Log error, notify admins or crash the application

  if (res.headersSent) return; // End function if response was already sent

  const { statusCode = 500, message } = error;
  const resMessage = statusCode === 500 ? 'Error interno' : message;

  res.status(statusCode).json(resMessage);
};

module.exports = handleApiError;
