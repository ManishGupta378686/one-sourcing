const salaryDeductionModel = require('../models/salaryDeductionsModel');


module.exports = {
    findAll: async (req) => {
        try {
            let salaryDeductions = await salaryDeductionModel.findAll();
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

    update: async (id) => {
        try {
            let salaryDeduction = await salaryDeductionModel.findOne({id:0}, {where: {id}});
            return salaryDeduction
        } catch (e) {
            throw e
        } 
    },

    delete: async (id) => {
        try {
            let salaryDeduction = await salaryDeductionModel.destroy({ where: {id} });
            return salaryDeduction
        } catch (e) {
            throw e
        } 
    },
};