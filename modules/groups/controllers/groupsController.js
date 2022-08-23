const groupModel = require('../models/groupsModel');
    const groupService = require('../services/groupsService');
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
            let groups = await groupService.all(req);
            if (groups.length) {
                res.code = RESPONSE_OK;
                res.message = "Groups data fetched successfully";
                res.data = groups;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Groups not found";
                res.data = groups;
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
            res.message = "Group saved successfully";
            res.data = await groupModel.create(req);
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    update: async (req, res, next) => {
        try {
            let {} = req.body;
            let group = await groupService.update(req);
            if (group) {
                group = await group.save();
                res.code = RESPONSE_UPDATED;
                res.message = "Group updated successfully";
                res.data = group;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Group not found";
                res.data = group;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    delete: async (req, res, next) => {
        try {
            let group = await groupService.delete(req);
            if (group) {
                res.code = RESPONSE_DELETED;
                res.message = "Group deleted successfully";
                res.data = group;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Group not found";
                res.data = group;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },
};