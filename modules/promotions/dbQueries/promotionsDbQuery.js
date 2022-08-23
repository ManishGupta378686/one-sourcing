const promotionModel = require('../models/promotionsModel');


module.exports = {
    findAll: async (req) => {
        try {
            let promotions = await promotionModel.findAll();
            return promotions
        } catch (e) {
            throw e
        } 
    },

    create: async (req) => {
        try {
            return promotion
        } catch (e) {
            throw e
        }
    },

    update: async (id) => {
        try {
            let promotion = await promotionModel.findOne({id:0}, {where: {id}});
            return promotion
        } catch (e) {
            throw e
        } 
    },

    delete: async (id) => {
        try {
            let promotion = await promotionModel.destroy({ where: {id} });
            return promotion
        } catch (e) {
            throw e
        } 
    },
};