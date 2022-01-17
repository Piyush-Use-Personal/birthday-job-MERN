const { Router } = require('express');
const { saveBirthday, getBirthday } = require('../../controllers/Birthday');
const SlowDown = require('../../middlewares/SlowDown');
const router = Router({ mergeParams: true });

router.post('/', saveBirthday);
router.get('/', SlowDown, getBirthday);

module.exports = router;
