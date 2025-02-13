const router = require('express').Router();
const WebhookResponse = require('@jambonz/node-client').WebhookResponse;

router.post('/', (req, res) => {
  const {logger} = req.app.locals;
  logger.debug({payload: req.body}, 'POST /gather');
  try {
    const app = new WebhookResponse();
    app
      .pause({length: 1.5})
      .gather({
        "actionHook": "/gatherinput",
        "input": ["digits"],
        "dtmfBargein": true,
        "numDigits": 1,
        "say": {"text": "please press a key" }
      });
    res.status(200).json(app);
  } catch (err) {
    logger.error({err}, 'Error');
    res.sendStatus(503);
  }
});

module.exports = router;
