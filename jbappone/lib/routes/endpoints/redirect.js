const router = require('express').Router();
const WebhookResponse = require('@jambonz/node-client').WebhookResponse;

router.post('/', (req, res) => {
  const {logger} = req.app.locals;
  logger.debug({payload: req.body}, 'POST /call');
  try {
    const app = new WebhookResponse();
    app
      .pause({length: 1.5})
      .redirect({actionHook: "https://jbapptwo.ngrok.io/gather"});
    res.status(200).json(app);
  } catch (err) {
    logger.error({err}, 'Error');
    res.sendStatus(503);
  }
});

module.exports = router;
