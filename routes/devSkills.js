var express = require('express');
var router = express.Router();
const devSkillsCtrl = require('../controllers/devSkills');

/* GET users listing. */
// GET /devSkills
router.get('/', devSkillsCtrl.index);

//Purpose: Return view(form)to add a new post
// GET /devSkills/new            ***** NEW UPDATE *****
router.get('/new', devSkillsCtrl.new);

// GET /devSkills/:id
router.get('/:id', devSkillsCtrl.show);






module.exports = router;

