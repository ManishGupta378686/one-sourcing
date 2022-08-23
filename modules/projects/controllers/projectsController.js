const projectModel = require('../models/projectsModel');
    const projectService = require('../services/projectsService');
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
            let projects = await projectService.all(req);
            if (projects.length) {
                res.code = RESPONSE_OK;
                res.message = "Projects data fetched successfully";
                res.data = projects;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Projects not found";
                res.data = projects;
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
            res.message = "Project saved successfully";
            res.data = await projectModel.create(req);
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    update: async (req, res, next) => {
        try {
            let {} = req.body;
            let project = await projectService.update(req);
            if (project) {
                project = await project.save();
                res.code = RESPONSE_UPDATED;
                res.message = "Project updated successfully";
                res.data = project;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Project not found";
                res.data = project;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    delete: async (req, res, next) => {
        try {
            let project = await projectService.delete(req);
            if (project) {
                res.code = RESPONSE_DELETED;
                res.message = "Project deleted successfully";
                res.data = project;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Project not found";
                res.data = project;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },
};