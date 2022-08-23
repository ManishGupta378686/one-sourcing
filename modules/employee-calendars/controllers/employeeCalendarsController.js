const employeeCalendarModel = require('../models/employeeCalendarsModel');
    const employeeCalendarService = require('../services/employeeCalendarsService');
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
            let employeeCalendars = await employeeCalendarService.all(req);
            if (employeeCalendars.length) {
                res.code = RESPONSE_OK;
                res.message = "Employee calendars data fetched successfully";
                res.data = employeeCalendars;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Employee calendars not found";
                res.data = employeeCalendars;
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
            res.message = "Employee calendar saved successfully";
            res.data = await employeeCalendarModel.create(req);
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    update: async (req, res, next) => {
        try {
            let {} = req.body;
            let employeeCalendar = await employeeCalendarService.update(req);
            if (employeeCalendar) {
                employeeCalendar = await employeeCalendar.save();
                res.code = RESPONSE_UPDATED;
                res.message = "Employee calendar updated successfully";
                res.data = employeeCalendar;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Employee calendar not found";
                res.data = employeeCalendar;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    delete: async (req, res, next) => {
        try {
            let employeeCalendar = await employeeCalendarService.delete(req);
            if (employeeCalendar) {
                res.code = RESPONSE_DELETED;
                res.message = "Employee calendar deleted successfully";
                res.data = employeeCalendar;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Employee calendar not found";
                res.data = employeeCalendar;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },
};