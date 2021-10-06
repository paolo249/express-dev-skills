const devSkills = [
    {id:4161, devSkill: 'Front-End Dev Skills: HTML, CSS, Javascript, Responsive Web, JQuery, Bootstrap'},
    {id:4162, devSkill: 'Back-End Dev Skills: Node.js, Python, SQL, Relational Databases, React, Django'},
    {id:4163, devSkill: 'Open-Source Tech Skills: Git, GitHub'}
    ];

    module.exports = {
        getAll,
        getOne
    };

    function getOne(id) {
        id = parseInt(id);
        return devSkills.find(devSkill => devSkill.id === id);
      }
    
      function getAll() {
        return devSkills;
      }