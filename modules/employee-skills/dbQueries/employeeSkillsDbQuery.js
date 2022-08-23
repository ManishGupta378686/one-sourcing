const employeeSkillModel = require('../models/employeeSkillsModel');


module.exports = {
    findAll: async (req) => {
        try {
            let employeeSkills = await employeeSkillModel.findAll();
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

    update: async (id) => {
        try {
            let employeeSkill = await employeeSkillModel.findOne({id:0}, {where: {id}});
            return employeeSkill
        } catch (e) {
            throw e
        } 
    },

    delete: async (id) => {
        try {
            let employeeSkill = await employeeSkillModel.destroy({ where: {id} });
            return employeeSkill
        } catch (e) {
            throw e
        } 
    },
};