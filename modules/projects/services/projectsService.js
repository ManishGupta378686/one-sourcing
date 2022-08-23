const projectDbQueries = require('../dbQueries/projectsDbQuery');


module.exports = {
    all: async (req) => {
        try {
            let projects = await projectDbQueries.findAll();
            return projects
        } catch (e) {
            throw e
        } 
    },

    create: async (req) => {
        try {
            return project
        } catch (e) {
            throw e
        }
    },

    update: async (req) => {
        try {
            let _id = req.params.id;
            let {} = req.body;
            let project = await projectDbQueries.update(_id);
            return project
        } catch (e) {
            throw e
        } 
    },

    delete: async (req, res, next) => {
        try {
            let project = await projectDbQueries.delete({ _id: req.params.id });
            return project
        } catch (e) {
            throw e
        } 
    },
};