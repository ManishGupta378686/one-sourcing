const salaryModel = require('../models/salariesModel');


module.exports = {
    findAll: async (req) => {
        try {
            let salaries = await salaryModel.findAll();
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

    update: async (id) => {
        try {
            let salary = await salaryModel.findOne({id:0}, {where: {id}});
            return salary
        } catch (e) {
            throw e
        } 
    },

    delete: async (id) => {
        try {
            let salary = await salaryModel.destroy({ where: {id} });
            return salary
        } catch (e) {
            throw e
        } 
    },
};