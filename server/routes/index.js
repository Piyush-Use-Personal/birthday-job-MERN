const express = require('express');
const router = express.Router();
const EmailTemplate = require('./EmailTemplate');
const Birthday = require('./Birthday');

router.use('/birthday', Birthday)
router.use('/template', EmailTemplate)
router.get('/', function(req, res) {
  res.status(200).send('Welcome to the backend!');
}); 

module.exports = router;
