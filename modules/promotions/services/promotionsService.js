const promotionDbQueries = require('../dbQueries/promotionsDbQuery');


module.exports = {
    all: async (req) => {
        try {
            let promotions = await promotionDbQueries.findAll();
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

    update: async (req) => {
        try {
            let _id = req.params.id;
            let {} = req.body;
            let promotion = await promotionDbQueries.update(_id);
            return promotion
        } catch (e) {
            throw e
        } 
    },

    delete: async (req, res, next) => {
        try {
            let promotion = await promotionDbQueries.delete({ _id: req.params.id });
            return promotion
        } catch (e) {
            throw e
        } 
    },
};