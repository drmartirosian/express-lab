const skills = [
    { skill: 'HTML', unlocked: true},
    { skill: 'CSS', unlocked: true},
    { skill: 'JavaScript', unlocked: true},
    { skill: 'NodeJS', unlocked: true},
    { skill: 'Express', unlocked: false},
    { skill: 'React', unlocked: false},
    { skill: 'Python', unlocked: false},
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