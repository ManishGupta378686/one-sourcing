const languageModel = require('../models/languagesModel');
const languageService = require('../services/languagesService');
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
            let languages = await languageService.all(req);
            if (languages.length) {
                res.code = RESPONSE_OK;
                res.message = "Languages data fetched successfully";
                res.data = languages;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Languages not found";
                res.data = languages;
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
            res.message = "Language saved successfully";
            res.data = await languageModel.create(req.body);
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    update: async (req, res, next) => {
        try {
            let { } = req.body;
            let language = await languageService.update(req);
            if (language) {
                language = await language.save();
                res.code = RESPONSE_UPDATED;
                res.message = "Language updated successfully";
                res.data = language;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Language not found";
                res.data = language;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    delete: async (req, res, next) => {
        try {
            let language = await languageService.delete(req);
            if (language) {
                res.code = RESPONSE_DELETED;
                res.message = "Language deleted successfully";
                res.data = language;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Language not found";
                res.data = language;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },
};