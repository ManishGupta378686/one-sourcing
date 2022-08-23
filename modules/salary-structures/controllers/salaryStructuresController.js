const salaryStructureModel = require('../models/salaryStructuresModel');
    const salaryStructureService = require('../services/salaryStructuresService');
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
            let salaryStructures = await salaryStructureService.all(req);
            if (salaryStructures.length) {
                res.code = RESPONSE_OK;
                res.message = "Salary structures data fetched successfully";
                res.data = salaryStructures;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Salary structures not found";
                res.data = salaryStructures;
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
            res.message = "Salary structure saved successfully";
            res.data = await salaryStructureModel.create(req);
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    update: async (req, res, next) => {
        try {
            let {} = req.body;
            let salaryStructure = await salaryStructureService.update(req);
            if (salaryStructure) {
                salaryStructure = await salaryStructure.save();
                res.code = RESPONSE_UPDATED;
                res.message = "Salary structure updated successfully";
                res.data = salaryStructure;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Salary structure not found";
                res.data = salaryStructure;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    delete: async (req, res, next) => {
        try {
            let salaryStructure = await salaryStructureService.delete(req);
            if (salaryStructure) {
                res.code = RESPONSE_DELETED;
                res.message = "Salary structure deleted successfully";
                res.data = salaryStructure;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Salary structure not found";
                res.data = salaryStructure;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },
};