const salaryDeductionModel = require('../models/salaryDeductionsModel');
    const salaryDeductionService = require('../services/salaryDeductionsService');
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
            let salaryDeductions = await salaryDeductionService.all(req);
            if (salaryDeductions.length) {
                res.code = RESPONSE_OK;
                res.message = "Salary deductions data fetched successfully";
                res.data = salaryDeductions;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Salary deductions not found";
                res.data = salaryDeductions;
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
            res.message = "Salary deduction saved successfully";
            res.data = await salaryDeductionModel.create(req);
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    update: async (req, res, next) => {
        try {
            let {} = req.body;
            let salaryDeduction = await salaryDeductionService.update(req);
            if (salaryDeduction) {
                salaryDeduction = await salaryDeduction.save();
                res.code = RESPONSE_UPDATED;
                res.message = "Salary deduction updated successfully";
                res.data = salaryDeduction;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Salary deduction not found";
                res.data = salaryDeduction;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    delete: async (req, res, next) => {
        try {
            let salaryDeduction = await salaryDeductionService.delete(req);
            if (salaryDeduction) {
                res.code = RESPONSE_DELETED;
                res.message = "Salary deduction deleted successfully";
                res.data = salaryDeduction;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Salary deduction not found";
                res.data = salaryDeduction;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },
};