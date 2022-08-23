const meetingModel = require('../models/meetingsModel');
    const meetingService = require('../services/meetingsService');
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
            let meetings = await meetingService.all(req);
            if (meetings.length) {
                res.code = RESPONSE_OK;
                res.message = "Meetings data fetched successfully";
                res.data = meetings;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Meetings not found";
                res.data = meetings;
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
            res.message = "Meeting saved successfully";
            res.data = await meetingModel.create(req);
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    update: async (req, res, next) => {
        try {
            let {} = req.body;
            let meeting = await meetingService.update(req);
            if (meeting) {
                meeting = await meeting.save();
                res.code = RESPONSE_UPDATED;
                res.message = "Meeting updated successfully";
                res.data = meeting;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Meeting not found";
                res.data = meeting;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    delete: async (req, res, next) => {
        try {
            let meeting = await meetingService.delete(req);
            if (meeting) {
                res.code = RESPONSE_DELETED;
                res.message = "Meeting deleted successfully";
                res.data = meeting;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Meeting not found";
                res.data = meeting;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },
};