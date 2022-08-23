const employeeSkillModel = require('../models/employeeSkillsModel');
    const employeeSkillService = require('../services/employeeSkillsService');
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
            let employeeSkills = await employeeSkillService.all(req);
            if (employeeSkills.length) {
                res.code = RESPONSE_OK;
                res.message = "Employee skills data fetched successfully";
                res.data = employeeSkills;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Employee skills not found";
                res.data = employeeSkills;
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
            res.message = "Employee skill saved successfully";
            res.data = await employeeSkillModel.create(req);
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    update: async (req, res, next) => {
        try {
            let {} = req.body;
            let employeeSkill = await employeeSkillService.update(req);
            if (employeeSkill) {
                employeeSkill = await employeeSkill.save();
                res.code = RESPONSE_UPDATED;
                res.message = "Employee skill updated successfully";
                res.data = employeeSkill;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Employee skill not found";
                res.data = employeeSkill;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    delete: async (req, res, next) => {
        try {
            let employeeSkill = await employeeSkillService.delete(req);
            if (employeeSkill) {
                res.code = RESPONSE_DELETED;
                res.message = "Employee skill deleted successfully";
                res.data = employeeSkill;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Employee skill not found";
                res.data = employeeSkill;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },
};