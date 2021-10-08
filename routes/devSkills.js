var express = require('express');
var router = express.Router();
const devSkillsCtrl = require('../controllers/devSkills');

/* GET users listing. */
// GET /devSkills
router.get('/', devSkillsCtrl.index);
//Purpose: Return view(form)to add a new post
// GET /devSkills/new           
router.get('/new', devSkillsCtrl.new);

// GET /devSkills/:id
router.get('/:id', devSkillsCtrl.show);
// POST /devSkills
router.post('/', devSkillsCtrl.create);
// DELETE /devSkills
router.delete('/:deleteskill', devSkillsCtrl.delete);
// GET /devSkills/:id/edit
router.get('/:id/edit', devSkillsCtrl.edit);
// PUT /devSkills
router.put('/:id', devSkillsCtrl.update);

module.exports = router;

