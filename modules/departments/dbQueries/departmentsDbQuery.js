const departmentModel = require('../models/departmentsModel');


module.exports = {
    findAll: async (req) => {
        try {
            let departments = await departmentModel.findAll();
            return departments
        } catch (e) {
            throw e
        } 
    },

    create: async (req) => {
        try {
            return department
        } catch (e) {
            throw e
        }
    },

    update: async (id) => {
        try {
            let department = await departmentModel.findOne({id:0}, {where: {id}});
            return department
        } catch (e) {
            throw e
        } 
    },

    delete: async (id) => {
        try {
            let department = await departmentModel.destroy({ where: {id} });
            return department
        } catch (e) {
            throw e
        } 
    },
};