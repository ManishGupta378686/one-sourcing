const skillModel = require('../models/skillsModel');
    const skillService = require('../services/skillsService');
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
            let skills = await skillService.all(req);
            if (skills.length) {
                res.code = RESPONSE_OK;
                res.message = "Skills data fetched successfully";
                res.data = skills;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Skills not found";
                res.data = skills;
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
            res.message = "Skill saved successfully";
            res.data = await skillModel.create(req);
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    update: async (req, res, next) => {
        try {
            let {} = req.body;
            let skill = await skillService.update(req);
            if (skill) {
                skill = await skill.save();
                res.code = RESPONSE_UPDATED;
                res.message = "Skill updated successfully";
                res.data = skill;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Skill not found";
                res.data = skill;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    delete: async (req, res, next) => {
        try {
            let skill = await skillService.delete(req);
            if (skill) {
                res.code = RESPONSE_DELETED;
                res.message = "Skill deleted successfully";
                res.data = skill;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Skill not found";
                res.data = skill;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },
};