const taskModel = require('../models/tasksModel');


module.exports = {
    findAll: async (req) => {
        try {
            let tasks = await taskModel.findAll();
            return tasks
        } catch (e) {
            throw e
        } 
    },

    create: async (req) => {
        try {
            return task
        } catch (e) {
            throw e
        }
    },

    update: async (id) => {
        try {
            let task = await taskModel.findOne({id:0}, {where: {id}});
            return task
        } catch (e) {
            throw e
        } 
    },

    delete: async (id) => {
        try {
            let task = await taskModel.destroy({ where: {id} });
            return task
        } catch (e) {
            throw e
        } 
    },
};