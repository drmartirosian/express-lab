var express = require('express');

var router = express.Router();

var skillsCtrl = require('../controllers/skills');

/* GET skills page. */
router.get('/', skillsCtrl.index);
/*GET */
router.get('/:id', skillsCtrl.show);

module.exports = router;
 