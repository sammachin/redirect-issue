const router = require('express').Router();

router.use('/call-status', require('./call-status'));
router.use('/call', require('./redirect'));
router.use('/gatherinput', require('./gatherinput'));

module.exports = router;
