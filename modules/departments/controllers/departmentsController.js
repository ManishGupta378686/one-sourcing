const departmentModel = require('../models/departmentsModel');
const departmentService = require('../services/departmentsService');
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
            let departments = await departmentService.all(req);
            if (departments.length) {
                res.code = RESPONSE_OK;
                res.message = "Departments data fetched successfully";
                res.data = departments;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Departments not found";
                res.data = departments;
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
            res.message = "Department saved successfully";
            res.data = await departmentModel.create(req.body);
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    update: async (req, res, next) => {
        try {
            let { } = req.body;
            let department = await departmentService.update(req);
            if (department) {
                department = await department.save();
                res.code = RESPONSE_UPDATED;
                res.message = "Department updated successfully";
                res.data = department;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Department not found";
                res.data = department;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    delete: async (req, res, next) => {
        try {
            let department = await departmentService.delete(req);
            if (department) {
                res.code = RESPONSE_DELETED;
                res.message = "Department deleted successfully";
                res.data = department;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Department not found";
                res.data = department;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },
};