var express = require('express');
var router = express.Router();
const devSkillsCtrl = require('../controllers/devSkills');

/* GET users listing. */
router.get('/', devSkillsCtrl.index);
// GET /todos/id
router.get('/:id', devSkillsCtrl.show);
module.exports = router;

