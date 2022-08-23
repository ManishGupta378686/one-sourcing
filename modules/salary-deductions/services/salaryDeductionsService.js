const salaryDeductionDbQueries = require('../dbQueries/salaryDeductionsDbQuery');


module.exports = {
    all: async (req) => {
        try {
            let salaryDeductions = await salaryDeductionDbQueries.findAll();
            return salaryDeductions
        } catch (e) {
            throw e
        } 
    },

    create: async (req) => {
        try {
            return salaryDeduction
        } catch (e) {
            throw e
        }
    },

    update: async (req) => {
        try {
            let _id = req.params.id;
            let {} = req.body;
            let salaryDeduction = await salaryDeductionDbQueries.update(_id);
            return salaryDeduction
        } catch (e) {
            throw e
        } 
    },

    delete: async (req, res, next) => {
        try {
            let salaryDeduction = await salaryDeductionDbQueries.delete({ _id: req.params.id });
            return salaryDeduction
        } catch (e) {
            throw e
        } 
    },
};