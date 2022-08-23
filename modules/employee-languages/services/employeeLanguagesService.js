const employeeLanguageDbQueries = require('../dbQueries/employeeLanguagesDbQuery');


module.exports = {
    all: async (req) => {
        try {
            let employeeLanguages = await employeeLanguageDbQueries.findAll();
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

    update: async (req) => {
        try {
            let _id = req.params.id;
            let {} = req.body;
            let employeeLanguage = await employeeLanguageDbQueries.update(_id);
            return employeeLanguage
        } catch (e) {
            throw e
        } 
    },

    delete: async (req, res, next) => {
        try {
            let employeeLanguage = await employeeLanguageDbQueries.delete({ _id: req.params.id });
            return employeeLanguage
        } catch (e) {
            throw e
        } 
    },
};