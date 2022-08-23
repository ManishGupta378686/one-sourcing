const skillDbQueries = require('../dbQueries/skillsDbQuery');


module.exports = {
    all: async (req) => {
        try {
            let skills = await skillDbQueries.findAll();
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

    update: async (req) => {
        try {
            let _id = req.params.id;
            let {} = req.body;
            let skill = await skillDbQueries.update(_id);
            return skill
        } catch (e) {
            throw e
        } 
    },

    delete: async (req, res, next) => {
        try {
            let skill = await skillDbQueries.delete({ _id: req.params.id });
            return skill
        } catch (e) {
            throw e
        } 
    },
};