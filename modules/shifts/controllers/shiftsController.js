const shiftModel = require('../models/shiftsModel');
    const shiftService = require('../services/shiftsService');
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
            let shifts = await shiftService.all(req);
            if (shifts.length) {
                res.code = RESPONSE_OK;
                res.message = "Shifts data fetched successfully";
                res.data = shifts;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Shifts not found";
                res.data = shifts;
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
            res.message = "Shift saved successfully";
            res.data = await shiftModel.create(req.body);
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    update: async (req, res, next) => {
        try {
            let {} = req.body;
            let shift = await shiftService.update(req);
            if (shift) {
                shift = await shift.save();
                res.code = RESPONSE_UPDATED;
                res.message = "Shift updated successfully";
                res.data = shift;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Shift not found";
                res.data = shift;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    delete: async (req, res, next) => {
        try {
            let shift = await shiftService.delete(req);
            if (shift) {
                res.code = RESPONSE_DELETED;
                res.message = "Shift deleted successfully";
                res.data = shift;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Shift not found";
                res.data = shift;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },
};