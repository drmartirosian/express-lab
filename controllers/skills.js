var Skill = require('../modules/skills');
module.exports = {
    index,
    show,
};
function show(req, res){
    res.render('skills/show', {
        skills: Skill.getOne(req.param.id),
        skillsNum: parseInt(req.params.id)+1
});
}
function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll()
    });
}; 