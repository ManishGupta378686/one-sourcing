const leafModel = require('../models/leavesModel');
const leafService = require('../services/leavesService');
const { error } = require("../../../middlewares/response");
const {
    RESPONSE_OK,
    RESPONSE_NOT_FOUND,
    RESPONSE_CREATED,
    RESPONSE_UPDATED,
    RESPONSE_DELETED,
} = require("../../../helpers/constants");

module.exports = {
    allEmployeesLeavesStatus: async (req, res, next) => {
        try {
            let leaves = await leafService.allEmployeesLeavesStatus(req);
            if (leaves.length) {
                res.code = RESPONSE_OK;
                res.message = "Leaves data fetched successfully";
                res.data = leaves;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Leaves not found";
                res.data = leaves;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },
    employeeLeaveStatus: async (req, res, next) => {
        try {
            let leaves = await leafService.employeeLeaveStatus(req);
            if (leaves.length) {
                res.code = RESPONSE_OK;
                res.message = "Leaves data fetched successfully";
                res.data = leaves;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Leaves not found";
                res.data = leaves;
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
            res.message = "Leaf saved successfully";
            res.data = await leafModel.create(req.body);
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    update: async (req, res, next) => {
        try {
            let { } = req.body;
            let leaf = await leafService.update(req);
            if (leaf) {
                leaf = await leaf.save();
                res.code = RESPONSE_UPDATED;
                res.message = "Leaf updated successfully";
                res.data = leaf;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Leaf not found";
                res.data = leaf;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    delete: async (req, res, next) => {
        try {
            let leaf = await leafService.delete(req);
            if (leaf) {
                res.code = RESPONSE_DELETED;
                res.message = "Leaf deleted successfully";
                res.data = leaf;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Leaf not found";
                res.data = leaf;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },
};