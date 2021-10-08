const devSkills = [
    {id:4161, devSkill: 'Front-End Dev Skills: HTML, CSS, Javascript, Responsive Web, JQuery, Bootstrap'},
    {id:4162, devSkill: 'Back-End Dev Skills: Node.js, Python, SQL, Relational Databases, React, Django'},
    {id:4163, devSkill: 'Open-Source Tech Skills: Git, GitHub'}
    ];

    module.exports = {
        getAll,
        getOne, 
        create,
        deleteOne,
        update
    };

    function update(id, updatedevSkill) {
      id = parseInt(id);
      const devSkill = devSkills.find(devSkill => devSkill.id === id);
      Object.assign(devSkill, updatedevSkill);
    }

    function deleteOne(id) {
      id = parseInt(id);
      const idx = devSkills.findIndex(devSkill => devSkill.id === id);
      devSkills.splice(idx, 1);
    }

    function create(devSkill) {
      devSkills.push(devSkill);
    }

    function getOne(id) {
        id = parseInt(id);
        return devSkills.find(devSkill => devSkill.id === id);
      }
    
    function getAll() {
        return devSkills;
      }