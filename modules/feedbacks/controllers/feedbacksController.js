const feedbackModel = require('../models/feedbacksModel');
    const feedbackService = require('../services/feedbacksService');
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
            let feedbacks = await feedbackService.all(req);
            if (feedbacks.length) {
                res.code = RESPONSE_OK;
                res.message = "Feedbacks data fetched successfully";
                res.data = feedbacks;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Feedbacks not found";
                res.data = feedbacks;
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
            res.message = "Feedback saved successfully";
            res.data = await feedbackModel.create(req);
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    update: async (req, res, next) => {
        try {
            let {} = req.body;
            let feedback = await feedbackService.update(req);
            if (feedback) {
                feedback = await feedback.save();
                res.code = RESPONSE_UPDATED;
                res.message = "Feedback updated successfully";
                res.data = feedback;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Feedback not found";
                res.data = feedback;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    delete: async (req, res, next) => {
        try {
            let feedback = await feedbackService.delete(req);
            if (feedback) {
                res.code = RESPONSE_DELETED;
                res.message = "Feedback deleted successfully";
                res.data = feedback;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Feedback not found";
                res.data = feedback;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },
};