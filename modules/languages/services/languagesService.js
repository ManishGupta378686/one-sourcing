const languageDbQueries = require('../dbQueries/languagesDbQuery');


module.exports = {
    all: async (req) => {
        try {
            let languages = await languageDbQueries.findAll();
            return languages
        } catch (e) {
            throw e
        } 
    },

    create: async (req) => {
        try {
            return language
        } catch (e) {
            throw e
        }
    },

    update: async (req) => {
        try {
            let _id = req.params.id;
            let {} = req.body;
            let language = await languageDbQueries.update(_id);
            return language
        } catch (e) {
            throw e
        } 
    },

    delete: async (req, res, next) => {
        try {
            let language = await languageDbQueries.delete({ _id: req.params.id });
            return language
        } catch (e) {
            throw e
        } 
    },
};