const taskModel = require('../models/tasksModel');
    const taskService = require('../services/tasksService');
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
            let tasks = await taskService.all(req);
            if (tasks.length) {
                res.code = RESPONSE_OK;
                res.message = "Tasks data fetched successfully";
                res.data = tasks;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Tasks not found";
                res.data = tasks;
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
            res.message = "Task saved successfully";
            res.data = await taskModel.create(req);
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    update: async (req, res, next) => {
        try {
            let {} = req.body;
            let task = await taskService.update(req);
            if (task) {
                task = await task.save();
                res.code = RESPONSE_UPDATED;
                res.message = "Task updated successfully";
                res.data = task;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Task not found";
                res.data = task;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    delete: async (req, res, next) => {
        try {
            let task = await taskService.delete(req);
            if (task) {
                res.code = RESPONSE_DELETED;
                res.message = "Task deleted successfully";
                res.data = task;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Task not found";
                res.data = task;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },
};