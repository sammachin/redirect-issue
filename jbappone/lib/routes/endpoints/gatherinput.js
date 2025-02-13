const router = require('express').Router();
const WebhookResponse = require('@jambonz/node-client').WebhookResponse;
router.post('/', (req, res) => {
  const {logger} = req.app.locals;
  logger.debug({payload: req.body}, 'POST /gatherinput');
  try {
    const app = new WebhookResponse();
    app
      .say({text: "this is the wrong server"});
    res.status(200).json(app);
  } catch (err) {
    logger.error({err}, 'Error');
    res.sendStatus(503);
  }
});

module.exports = router;
