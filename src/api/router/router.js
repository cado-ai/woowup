const router = require('express').Router();

router.use('/email', require('../components/email/emailRouter'));
router.use('/auth', require('../components/auth/authRouter'));


module.exports = router;
