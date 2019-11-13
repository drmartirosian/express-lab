const skills = [
    { skill: 'HTML', unlocked: true},
    { skill: 'CSS', unlocked: false},
    { skill: 'JavaScript', unlocked: true},
    { skill: 'NodeJS', unlocked: true},
    { skill: 'Express', unlocked: true},
    { skill: 'React', unlocked: false},
    { skill: 'Python', unlocked: false},
    { skill: 'JQuery', unlocked: true},
];


module.exports = {
    getOne,
    getAll,
};
function getOne(id) {
    return skills[id];
};
function getAll() {
    return skills;
};