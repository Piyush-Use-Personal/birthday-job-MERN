const { Router } = require('express');
const { getTemplates } = require('../../controllers/EmailTemplate');
const SlowDown = require('../../middlewares/SlowDown');

const router = Router({ mergeParams: true });

router.get('/', SlowDown, getTemplates);

module.exports = router;
