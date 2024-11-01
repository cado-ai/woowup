const router = require('express').Router();

router.use('/email', require('../components/email/emailRouter'));


module.exports = router;
