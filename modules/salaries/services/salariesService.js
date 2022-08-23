const salaryDbQueries = require('../dbQueries/salariesDbQuery');


module.exports = {
    all: async (req) => {
        try {
            let salaries = await salaryDbQueries.findAll();
            return salaries
        } catch (e) {
            throw e
        } 
    },

    create: async (req) => {
        try {
            return salary
        } catch (e) {
            throw e
        }
    },

    update: async (req) => {
        try {
            let _id = req.params.id;
            let {} = req.body;
            let salary = await salaryDbQueries.update(_id);
            return salary
        } catch (e) {
            throw e
        } 
    },

    delete: async (req, res, next) => {
        try {
            let salary = await salaryDbQueries.delete({ _id: req.params.id });
            return salary
        } catch (e) {
            throw e
        } 
    },
};