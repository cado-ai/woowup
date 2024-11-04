const { handleNotFound, handleApiError } = require('../middleware');

const router = require('express').Router();

router.use('/email', require('../components/email/emailRouter'));
router.use('/auth', require('../components/auth/authRouter'));

// Catch not-found requests
router.use(handleNotFound);

// Handle api errors
router.use(handleApiError);

module.exports = router;
