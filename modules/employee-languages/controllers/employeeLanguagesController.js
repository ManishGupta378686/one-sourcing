const employeeLanguageModel = require('../models/employeeLanguagesModel');
    const employeeLanguageService = require('../services/employeeLanguagesService');
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
            let employeeLanguages = await employeeLanguageService.all(req);
            if (employeeLanguages.length) {
                res.code = RESPONSE_OK;
                res.message = "Employee languages data fetched successfully";
                res.data = employeeLanguages;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Employee languages not found";
                res.data = employeeLanguages;
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
            res.message = "Employee language saved successfully";
            res.data = await employeeLanguageModel.create(req);
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    update: async (req, res, next) => {
        try {
            let {} = req.body;
            let employeeLanguage = await employeeLanguageService.update(req);
            if (employeeLanguage) {
                employeeLanguage = await employeeLanguage.save();
                res.code = RESPONSE_UPDATED;
                res.message = "Employee language updated successfully";
                res.data = employeeLanguage;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Employee language not found";
                res.data = employeeLanguage;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    delete: async (req, res, next) => {
        try {
            let employeeLanguage = await employeeLanguageService.delete(req);
            if (employeeLanguage) {
                res.code = RESPONSE_DELETED;
                res.message = "Employee language deleted successfully";
                res.data = employeeLanguage;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Employee language not found";
                res.data = employeeLanguage;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },
};