const groupDbQueries = require('../dbQueries/groupsDbQuery');


module.exports = {
    all: async (req) => {
        try {
            let groups = await groupDbQueries.findAll();
            return groups
        } catch (e) {
            throw e
        } 
    },

    create: async (req) => {
        try {
            return group
        } catch (e) {
            throw e
        }
    },

    update: async (req) => {
        try {
            let _id = req.params.id;
            let {} = req.body;
            let group = await groupDbQueries.update(_id);
            return group
        } catch (e) {
            throw e
        } 
    },

    delete: async (req, res, next) => {
        try {
            let group = await groupDbQueries.delete({ _id: req.params.id });
            return group
        } catch (e) {
            throw e
        } 
    },
};