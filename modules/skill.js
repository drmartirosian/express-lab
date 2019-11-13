const skills = [
    { skill: HTML, unlocked: true},
    { skill: CSS, unlocked: true},
    { skill: JavaScript, unlocked: true},
    { Skill: NodeJS, unlocked: true},
    { Skill: Express, unlocked: false},
    { Skill: React, unlocked: false},
    { Skill: Python, unlocked: false},
];


module.exports = {
    getAll,
    getOne
};

function getOne(id) {
    return skills[id];
}
function getAll() {
    return skills;
}