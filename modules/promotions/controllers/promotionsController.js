const promotionModel = require('../models/promotionsModel');
    const promotionService = require('../services/promotionsService');
const { error } = require("../../../middlewares/response");
const {
    RESPONSE_OK,
    RESPONSE_NOT_FOUND,
    RESPONSE_CREATED,
    RESPONSE_UPDATED,
    RESPONSE_DELETED,
} = require("../../../helpers/constants");

module.exports = {
    all: async (req, res, next) => {
        try {
            let promotions = await promotionService.all(req);
            if (promotions.length) {
                res.code = RESPONSE_OK;
                res.message = "Promotions data fetched successfully";
                res.data = promotions;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Promotions not found";
                res.data = promotions;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    create: async (req, res, next) => {
        try {
            res.code = RESPONSE_CREATED;
            res.message = "Promotion saved successfully";
            res.data = await promotionModel.create(req);
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    update: async (req, res, next) => {
        try {
            let {} = req.body;
            let promotion = await promotionService.update(req);
            if (promotion) {
                promotion = await promotion.save();
                res.code = RESPONSE_UPDATED;
                res.message = "Promotion updated successfully";
                res.data = promotion;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Promotion not found";
                res.data = promotion;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    delete: async (req, res, next) => {
        try {
            let promotion = await promotionService.delete(req);
            if (promotion) {
                res.code = RESPONSE_DELETED;
                res.message = "Promotion deleted successfully";
                res.data = promotion;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Promotion not found";
                res.data = promotion;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },
};