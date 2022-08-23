const employeeLanguageModel = require('../models/employeeLanguagesModel');


module.exports = {
    findAll: async (req) => {
        try {
            let employeeLanguages = await employeeLanguageModel.findAll();
            return employeeLanguages
        } catch (e) {
            throw e
        } 
    },

    create: async (req) => {
        try {
            return employeeLanguage
        } catch (e) {
            throw e
        }
    },

    update: async (id) => {
        try {
            let employeeLanguage = await employeeLanguageModel.findOne({id:0}, {where: {id}});
            return employeeLanguage
        } catch (e) {
            throw e
        } 
    },

    delete: async (id) => {
        try {
            let employeeLanguage = await employeeLanguageModel.destroy({ where: {id} });
            return employeeLanguage
        } catch (e) {
            throw e
        } 
    },
};