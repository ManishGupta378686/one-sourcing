const taskDbQueries = require('../dbQueries/tasksDbQuery');


module.exports = {
    all: async (req) => {
        try {
            let tasks = await taskDbQueries.findAll();
            return tasks
        } catch (e) {
            throw e
        } 
    },

    create: async (req) => {
        try {
            return task
        } catch (e) {
            throw e
        }
    },

    update: async (req) => {
        try {
            let _id = req.params.id;
            let {} = req.body;
            let task = await taskDbQueries.update(_id);
            return task
        } catch (e) {
            throw e
        } 
    },

    delete: async (req, res, next) => {
        try {
            let task = await taskDbQueries.delete({ _id: req.params.id });
            return task
        } catch (e) {
            throw e
        } 
    },
};