const employeeRoleModel = require('../models/employeeRolesModel');


module.exports = {
    findAll: async (req) => {
        try {
            let employeeRoles = await employeeRoleModel.findAll();
            return employeeRoles
        } catch (e) {
            throw e
        } 
    },

    create: async (req) => {
        try {
            return employeeRole
        } catch (e) {
            throw e
        }
    },

    update: async (id) => {
        try {
            let employeeRole = await employeeRoleModel.findOne({id:0}, {where: {id}});
            return employeeRole
        } catch (e) {
            throw e
        } 
    },

    delete: async (id) => {
        try {
            let employeeRole = await employeeRoleModel.destroy({ where: {id} });
            return employeeRole
        } catch (e) {
            throw e
        } 
    },
};