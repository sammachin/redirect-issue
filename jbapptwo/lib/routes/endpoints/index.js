const router = require('express').Router();

router.use('/call-status', require('./call-status'));
router.use('/gather', require('./gather'));
router.use('/gatherinput', require('./gatherinput'));

module.exports = router;
