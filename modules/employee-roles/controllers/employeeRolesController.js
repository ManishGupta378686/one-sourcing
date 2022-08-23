const employeeRoleModel = require('../models/employeeRolesModel');
    const employeeRoleService = require('../services/employeeRolesService');
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
            let employeeRoles = await employeeRoleService.all(req);
            if (employeeRoles.length) {
                res.code = RESPONSE_OK;
                res.message = "Employee roles data fetched successfully";
                res.data = employeeRoles;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Employee roles not found";
                res.data = employeeRoles;
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
            res.message = "Employee role saved successfully";
            res.data = await employeeRoleModel.create(req);
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    update: async (req, res, next) => {
        try {
            let {} = req.body;
            let employeeRole = await employeeRoleService.update(req);
            if (employeeRole) {
                employeeRole = await employeeRole.save();
                res.code = RESPONSE_UPDATED;
                res.message = "Employee role updated successfully";
                res.data = employeeRole;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Employee role not found";
                res.data = employeeRole;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    delete: async (req, res, next) => {
        try {
            let employeeRole = await employeeRoleService.delete(req);
            if (employeeRole) {
                res.code = RESPONSE_DELETED;
                res.message = "Employee role deleted successfully";
                res.data = employeeRole;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Employee role not found";
                res.data = employeeRole;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },
};