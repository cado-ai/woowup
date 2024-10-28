const router = require('express').Router();
const { handleApiError, handleNotFound } = require('../middleware');

router.use('/email/v1', require('../components/auth/authRouter'));

// Catch not-found requests
router.use(handleNotFound);

// Handle api errors
router.use(handleApiError);

module.exports = router;
