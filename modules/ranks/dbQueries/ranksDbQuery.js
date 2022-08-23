const rankModel = require('../models/ranksModel');


module.exports = {
    findAll: async (req) => {
        try {
            let ranks = await rankModel.findAll();
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

    update: async (id) => {
        try {
            let rank = await rankModel.findOne({id:0}, {where: {id}});
            return rank
        } catch (e) {
            throw e
        } 
    },

    delete: async (id) => {
        try {
            let rank = await rankModel.destroy({ where: {id} });
            return rank
        } catch (e) {
            throw e
        } 
    },
};