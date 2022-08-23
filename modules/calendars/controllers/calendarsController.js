const calendarModel = require('../models/calendarsModel');
    const calendarService = require('../services/calendarsService');
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
            let calendars = await calendarService.all(req);
            if (calendars.length) {
                res.code = RESPONSE_OK;
                res.message = "Calendars data fetched successfully";
                res.data = calendars;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Calendars not found";
                res.data = calendars;
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
            res.message = "Calendar saved successfully";
            res.data = await calendarModel.create(req);
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    update: async (req, res, next) => {
        try {
            let {} = req.body;
            let calendar = await calendarService.update(req);
            if (calendar) {
                calendar = await calendar.save();
                res.code = RESPONSE_UPDATED;
                res.message = "Calendar updated successfully";
                res.data = calendar;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Calendar not found";
                res.data = calendar;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    delete: async (req, res, next) => {
        try {
            let calendar = await calendarService.delete(req);
            if (calendar) {
                res.code = RESPONSE_DELETED;
                res.message = "Calendar deleted successfully";
                res.data = calendar;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Calendar not found";
                res.data = calendar;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },
};