//exporting all of the controller functions (controller actions)
const Skill = require('../models/devSkill');

module.exports = {
  index,
  show,
  new: newdevSkills,
  create,
  delete: deletedevSkill, 
  edit,
  update

};

function update(req,res) {
  req.body.done = !!req.body.done; 
  Skill.update(req.params.id, req.body);
  res.redirect(`/devSkills/${req.params.id}`);
}

function edit(req,res) {
  const devSkill = Skill.getOne(req.params.id);
  res.render('devSkills/edit', { devSkill });
}

function deletedevSkill(req, res) {
  Skill.deleteOne(req.params.deleteskill);
  res.redirect('/devSkills');
}
function create(req, res) {
  console.log(req.body);
  Skill.create(req.body);
  res.redirect('/devSkills');
}

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
  const devSkills = Skill.getAll();
  res.render('devSkills/index', { devSkills });
}