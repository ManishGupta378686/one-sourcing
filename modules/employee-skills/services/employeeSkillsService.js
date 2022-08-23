const employeeSkillDbQueries = require('../dbQueries/employeeSkillsDbQuery');


module.exports = {
    all: async (req) => {
        try {
            let employeeSkills = await employeeSkillDbQueries.findAll();
            return employeeSkills
        } catch (e) {
            throw e
        } 
    },

    create: async (req) => {
        try {
            return employeeSkill
        } catch (e) {
            throw e
        }
    },

    update: async (req) => {
        try {
            let _id = req.params.id;
            let {} = req.body;
            let employeeSkill = await employeeSkillDbQueries.update(_id);
            return employeeSkill
        } catch (e) {
            throw e
        } 
    },

    delete: async (req, res, next) => {
        try {
            let employeeSkill = await employeeSkillDbQueries.delete({ _id: req.params.id });
            return employeeSkill
        } catch (e) {
            throw e
        } 
    },
};