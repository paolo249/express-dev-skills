//exporting all of the controller functions (controller actions)
const Skill = require('../models/devSkill');

module.exports = {
  index,
  show,
  new: newdevSkills,

};

function newdevSkills(req, res) {
  res.render('devSkills/new');
}

function show(req, res) {
  // Route parameters are accessed via the
  // req.params object
  const devSkill = Skill.getOne(req.params.id);
  res.render('devSkills/show', { devSkill });
}

function index(req, res) {
  // Read all of the todos
  const devSkills = Skill.getAll();
  // Render the todos/index, passing to it
  // the todos
  res.render('devSkills/index', { devSkills });
}