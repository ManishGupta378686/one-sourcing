const rankModel = require('../models/ranksModel');
    const rankService = require('../services/ranksService');
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
            let ranks = await rankService.all(req);
            if (ranks.length) {
                res.code = RESPONSE_OK;
                res.message = "Ranks data fetched successfully";
                res.data = ranks;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Ranks not found";
                res.data = ranks;
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
            res.message = "Rank saved successfully";
            res.data = await rankModel.create(req);
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    update: async (req, res, next) => {
        try {
            let {} = req.body;
            let rank = await rankService.update(req);
            if (rank) {
                rank = await rank.save();
                res.code = RESPONSE_UPDATED;
                res.message = "Rank updated successfully";
                res.data = rank;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Rank not found";
                res.data = rank;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    delete: async (req, res, next) => {
        try {
            let rank = await rankService.delete(req);
            if (rank) {
                res.code = RESPONSE_DELETED;
                res.message = "Rank deleted successfully";
                res.data = rank;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Rank not found";
                res.data = rank;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },
};