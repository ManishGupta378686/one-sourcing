const bonusModel = require('../models/bonusesModel');
    const bonusService = require('../services/bonusesService');
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
            let bonuses = await bonusService.all(req);
            if (bonuses.length) {
                res.code = RESPONSE_OK;
                res.message = "Bonuses data fetched successfully";
                res.data = bonuses;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Bonuses not found";
                res.data = bonuses;
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
            res.message = "Bonus saved successfully";
            res.data = await bonusModel.create(req);
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    update: async (req, res, next) => {
        try {
            let {} = req.body;
            let bonus = await bonusService.update(req);
            if (bonus) {
                bonus = await bonus.save();
                res.code = RESPONSE_UPDATED;
                res.message = "Bonus updated successfully";
                res.data = bonus;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Bonus not found";
                res.data = bonus;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    delete: async (req, res, next) => {
        try {
            let bonus = await bonusService.delete(req);
            if (bonus) {
                res.code = RESPONSE_DELETED;
                res.message = "Bonus deleted successfully";
                res.data = bonus;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Bonus not found";
                res.data = bonus;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },
};