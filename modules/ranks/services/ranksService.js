const rankDbQueries = require('../dbQueries/ranksDbQuery');


module.exports = {
    all: async (req) => {
        try {
            let ranks = await rankDbQueries.findAll();
            return ranks
        } catch (e) {
            throw e
        } 
    },

    create: async (req) => {
        try {
            return rank
        } catch (e) {
            throw e
        }
    },

    update: async (req) => {
        try {
            let _id = req.params.id;
            let {} = req.body;
            let rank = await rankDbQueries.update(_id);
            return rank
        } catch (e) {
            throw e
        } 
    },

    delete: async (req, res, next) => {
        try {
            let rank = await rankDbQueries.delete({ _id: req.params.id });
            return rank
        } catch (e) {
            throw e
        } 
    },
};