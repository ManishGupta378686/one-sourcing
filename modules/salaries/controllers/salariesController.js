const salaryModel = require('../models/salariesModel');
    const salaryService = require('../services/salariesService');
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
            let salaries = await salaryService.all(req);
            if (salaries.length) {
                res.code = RESPONSE_OK;
                res.message = "Salaries data fetched successfully";
                res.data = salaries;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Salaries not found";
                res.data = salaries;
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
            res.message = "Salary saved successfully";
            res.data = await salaryModel.create(req);
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    update: async (req, res, next) => {
        try {
            let {} = req.body;
            let salary = await salaryService.update(req);
            if (salary) {
                salary = await salary.save();
                res.code = RESPONSE_UPDATED;
                res.message = "Salary updated successfully";
                res.data = salary;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Salary not found";
                res.data = salary;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    delete: async (req, res, next) => {
        try {
            let salary = await salaryService.delete(req);
            if (salary) {
                res.code = RESPONSE_DELETED;
                res.message = "Salary deleted successfully";
                res.data = salary;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Salary not found";
                res.data = salary;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },
};