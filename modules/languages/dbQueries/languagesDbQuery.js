const languageModel = require('../models/languagesModel');


module.exports = {
    findAll: async (req) => {
        try {
            let languages = await languageModel.findAll();
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

    update: async (id) => {
        try {
            let language = await languageModel.findOne({id:0}, {where: {id}});
            return language
        } catch (e) {
            throw e
        } 
    },

    delete: async (id) => {
        try {
            let language = await languageModel.destroy({ where: {id} });
            return language
        } catch (e) {
            throw e
        } 
    },
};