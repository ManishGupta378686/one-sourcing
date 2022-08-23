const bonusModel = require('../models/bonusesModel');


module.exports = {
    findAll: async (req) => {
        try {
            let bonuses = await bonusModel.findAll();
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

    update: async (id) => {
        try {
            let bonus = await bonusModel.findOne({id:0}, {where: {id}});
            return bonus
        } catch (e) {
            throw e
        } 
    },

    delete: async (id) => {
        try {
            let bonus = await bonusModel.destroy({ where: {id} });
            return bonus
        } catch (e) {
            throw e
        } 
    },
};