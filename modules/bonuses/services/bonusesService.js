const bonusDbQueries = require('../dbQueries/bonusesDbQuery');


module.exports = {
    all: async (req) => {
        try {
            let bonuses = await bonusDbQueries.findAll();
            return bonuses
        } catch (e) {
            throw e
        } 
    },

    create: async (req) => {
        try {
            return bonus
        } catch (e) {
            throw e
        }
    },

    update: async (req) => {
        try {
            let _id = req.params.id;
            let {} = req.body;
            let bonus = await bonusDbQueries.update(_id);
            return bonus
        } catch (e) {
            throw e
        } 
    },

    delete: async (req, res, next) => {
        try {
            let bonus = await bonusDbQueries.delete({ _id: req.params.id });
            return bonus
        } catch (e) {
            throw e
        } 
    },
};