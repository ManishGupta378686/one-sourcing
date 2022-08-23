const projectModel = require('../models/projectsModel');


module.exports = {
    findAll: async (req) => {
        try {
            let projects = await projectModel.findAll();
            return projects
        } catch (e) {
            throw e
        } 
    },

    create: async (req) => {
        try {
            return project
        } catch (e) {
            throw e
        }
    },

    update: async (id) => {
        try {
            let project = await projectModel.findOne({id:0}, {where: {id}});
            return project
        } catch (e) {
            throw e
        } 
    },

    delete: async (id) => {
        try {
            let project = await projectModel.destroy({ where: {id} });
            return project
        } catch (e) {
            throw e
        } 
    },
};