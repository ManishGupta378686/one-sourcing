const skillModel = require('../models/skillsModel');


module.exports = {
    findAll: async (req) => {
        try {
            let skills = await skillModel.findAll();
            return skills
        } catch (e) {
            throw e
        } 
    },

    create: async (req) => {
        try {
            return skill
        } catch (e) {
            throw e
        }
    },

    update: async (id) => {
        try {
            let skill = await skillModel.findOne({id:0}, {where: {id}});
            return skill
        } catch (e) {
            throw e
        } 
    },

    delete: async (id) => {
        try {
            let skill = await skillModel.destroy({ where: {id} });
            return skill
        } catch (e) {
            throw e
        } 
    },
};